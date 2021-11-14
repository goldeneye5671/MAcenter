import React from 'react'

export default function Address({address, setAddress, setValidated, submitClicked}) {
    
    const [street, setStreet] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [zipcode, setZipcode] = React.useState('');

    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const myErrors = [];
            const parsedAddress = parseForAPIRoute(`${street} ${city} ${state} ${country} ${zipcode}`);
            if (street.length === 0 || street.length >= 255) {
                myErrors.push("Street name must be between 1 and 255 characters");
            }
    
            if (city.length === 0 || city.length >= 255) {
                myErrors.push("City must be between 1 and 255 characters");
            }
    
            if (state.length === 0 || state.length >=50) {
                myErrors.push("State/province must be between 1 and 50 characters");
            }
    
            if (country.length === 0 || country.length >= 100) {
                myErrors.push("Country name must be between 1 and 100 characters");
            }
    
            if (zipcode.length === 0 || zipcode.length >= 15) {
                myErrors.push("Zip code must be between 1 and 15 characters");
            }

            if (myErrors.length > 0) {
                setErrors(myErrors);
                //set the validated flag to false
            } else {
                //Check to see if the address in it's entirety is correct
                //this IIFE will get the address in a try catch block and
                //  check to see if it is a valid address
                (async () => {
                    try{
                        const response = await fetch(`https://api.radar.io/v1/geocode/forward?query=${parsedAddress}`,
                            {
                                "method":"GET",
                                "headers":{"authorization":"prj_test_pk_9b56acdee26ee38170ccd7bd107b3fbef2ae1438"}
                            }
                        )
                        const recievedAddress = await response.json();

                        if (recievedAddress.addresses.length === 0 || recievedAddress.addresses.length > 1) {
                            myErrors.push("Address is invalid. Please re-enter the address")

                        } else {
                            if (recievedAddress.addresses[0].addressLabel.toLowerCase() !== street.toLowerCase()){
                                myErrors.push("Addresses does not exist. Please double check the address")
                            }
                            if (!recievedAddress.addresses[0].city.toLowerCase().includes(city.toLowerCase())) {
                                myErrors.push("Cities do not exist. Please double check the city");
                            }
                            if (recievedAddress.addresses[0].state.toLowerCase() !== state.toLowerCase()) {
                                myErrors.push("State/province does not exist. Please double check the state/province")
                            }
                            if (recievedAddress.addresses[0].country.toLowerCase() !== country.toLowerCase()) {
                                myErrors.push("Country does not exist. Please double check the country")
                            }
                            if (recievedAddress.addresses[0].postalCode !== zipcode) {
                                myErrors.push("Zip code does not exist. Please double check the zipcode")
                            }
                        if (myErrors.length > 0){
                            setErrors(myErrors);
                            setValidated(false);
                        } else {
                            setErrors([]);
                            setValidated(true)
                        }
                    }
                }catch(e) {
                    errors.push("A connection issue has occurred. Please check your internet connection and refresh the page")
                    setErrors(myErrors);
                }
            })()
            //check after the IIFE runs to see if there are any errors
            if (myErrors.length > 0) {
                setErrors(myErrors);
                setValidated(false);
            } else {
                setAddress(parsedAddress);
                setErrors([]);
                setValidated(true)
            }
            }
        },
        [
            street,
            city,
            state,
            country,
            zipcode,
            setAddress,
            setValidated
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
            <label>Street Address</label>
            <input
                className={"form-field"}
                type={"input"} value={street}
                onChange={e => setStreet(e.target.value)}
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
            {
                errors.includes("Addresses does not exist. Please double check the address") && submitClicked ? (
                    <p>
                        Addresses does not exist. Please double check the address
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
            {
                errors.includes("Cities do not exist. Please double check the city") && submitClicked ? (
                    <p>
                        City do not exist. Please double check the city
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
            {
                errors.includes("State/province does not exist. Please double check the state/province") && submitClicked ? (
                    <p>
                        State/province does not exist. Please double check the state/province
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
            {
                errors.includes("Country does not exist. Please double check the country") && submitClicked ? (
                    <p>
                        Country does not exist. Please double check the country
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
                onChange={e => setZipcode(e.target.value)}
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
            {
                errors.includes("Zip code does not exist. Please double check the zipcode") && submitClicked ? (
                    <p>
                        Zip code does not exist. Please double check the zipcode
                    </p>
                )
                :
                null
            }
        </div>
    </div>
)
    
}
