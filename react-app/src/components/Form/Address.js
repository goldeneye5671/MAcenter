import React from 'react'

export default function Address({address, setAddress, submitClicked}) {

    const [streetName, setStreetName] = React.useState("");
    const [city, setCity] = React.useState("");
    const [state, setState] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [zipcode, setZipCode] = React.useState("");

    const [errors, setErrors] = React.useState([])


    React.useEffect(
        () => {
            const errors = [];

            if (streetName.length === 0 || streetName.length >= 255) {
                errors.push("Street name must be between 1 and 255 characters");
            }
    
            if (city.length === 0 || city.length >= 255) {
                errors.push("City must be between 1 and 255 characters");
            }
    
            if (state.length === 0 || state.length >=50) {
                errors.push("State/province must be between 1 and 50 characters");
            }
    
            if (country.length === 0 || country.length >= 100) {
                errors.push("Country name must be between 1 and 100 characters");
            }
    
            if (zipcode.length === 0 || zipcode.length >= 15) {
                errors.push("Zip code must be between 1 and 15 characters");
            }
    
            if (errors.length > 0) {
                setErrors(errors);
            } else {
                (async () => {
                    try{
                        const parsedAddress = parseForAPIRoute(`${streetName} ${city} ${state} ${country} ${zipcode}`);
                        const response = await fetch(`https://api.radar.io/v1/geocode/forward?query=${parsedAddress}`,
                            {
                                "method":"GET",
                                "headers":{"authorization":"prj_test_pk_9b56acdee26ee38170ccd7bd107b3fbef2ae1438"}
                            }
                        )
                        const recievedAddress = await response.json();
                        if (recievedAddress.addresses.length === 0 || recievedAddress.addresses.length > 1) {
                            errors.push("Address is invalid. Please re-enter the address")
                            setErrors(errors)
                        }
                    } catch (e) {
                        errors.push("A connection issue has occurred. Please check your internet connection and try again")
                        setErrors(errors)
                    }
                })()
            }
        },
        [
            streetName,
            city,
            state,
            country,
            zipcode,
            setAddress,
            address,
        ]
    )

    //The querry param is looking for an address seporated by a + sign,
    //so this function will replace all spaces in the string with a + sign

    function parseForAPIRoute(fullAddress) {
        const separatedBySpace = fullAddress.split(" ");
        const parsedAddress = separatedBySpace.reduce( (prev, portion) => {
            return `${prev}+${portion}`
        });
        return parsedAddress;
    }

    return (
        <div>
            {
                // Overall errors such as connection issues
                errors.includes("A connection issue has occurred. Please check your internet connection and try again") && (
                    <p>
                        An unknown error or connection error has occurred. Please check your internet connection and try again
                    </p>
                )
            }

            {
                errors.includes("Address is invalid. Please re-enter the address") && (
                    <p>
                        Address is invalid. Please re-enter the address
                    </p>
                )
            }
            {/* 
                Values needed:
                    ~ Street name (includes address number)
                    ~ City
                    ~ State/Province
                    ~ Country
                    ~ Zip Code
                Each one needs to exist and be valid. I want
                to check the address entered with an external
                API to see if the address entered is of a valid
                location
            */}

            <div>
                <label>Street Name</label>
                <input
                    className={"form-field"}
                    type={"input"} value={streetName}
                    onChange={e => setStreetName(e.target.value)}
                />
                {
                    errors.includes("Street name must be between 1 and 255 characters") && submitClicked ? (
                        <p>
                            Street name must be between 1 and 255 characters
                        </p>
                    )
                    :
                    null
                }
            </div>
            <div>
                <label>City</label>
                <input
                    className={"form-field"}
                    type={"input"}
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
                {
                    errors.includes("City must be between 1 and 255 characters") && submitClicked ? (
                        <p>
                            City must be between 1 and 255 characters
                        </p>
                    )
                    :
                    null
                }
            </div>
            <div>
                <label>State/Province</label>
                <input 
                    className={"form-field"}
                    type={"input"}
                    value={state}
                    onChange={e => setState(e.target.value)}
                />
                {
                    errors.includes("State/province must be between 1 and 50 characters") && submitClicked ? (
                        <p>
                            State/province must be between 1 and 50 characters
                        </p>
                    )
                    :
                    null
                }
            </div>
            <div>
                <label>Country</label>
                <input
                    className={"form-field"}
                    type={"input"}
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                />
                {
                    errors.includes("Country name must be between 1 and 100 characters") && submitClicked ? (
                        <p>
                            Country name must be between 1 and 100 characters
                        </p>
                    )
                    :
                    null
                }
            </div>
            <div>
                <label>Zip Code</label>
                <input
                    className={"form-field"}
                    type={"input"} 
                    value={zipcode} 
                    onChange={e => setZipCode(e.target.value)}
                />
                {
                    errors.includes("Zip code must be between 1 and 15 characters") && submitClicked ? (
                        <p>
                            Zip code must be between 1 and 15 characters
                        </p>
                    )
                    :
                    null
                }
            </div>
        </div>
    )
}
