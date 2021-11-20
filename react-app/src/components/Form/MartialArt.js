import React from 'react'

export default function MartialArt({martialArt, setMartialArt, martialArts, submitClicked, setValidated, shown}) {
    
    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const myErrors = [];

            if (shown) {
                if (martialArt === "null") {
                    myErrors.push("Please select a martial art");
                }
            }
            if (myErrors.length > 0) {
                setErrors(myErrors);
                setValidated(false);
            } else {
                setErrors([])
                setValidated(true);
            }
        },
        [
            martialArt,
            setMartialArt,
            setValidated,
            submitClicked,
            shown
        ]
    ) 
    
    return (
        <div>
            <label>martial art</label>
            <select value={martialArt} onChange={e => setMartialArt(e.target.value)}>
                <option value={"null"}>Select Martial Art</option>
                {
                    martialArts.map( 
                        art => {
                            return (<option value={art.id}>{art.name}</option>)
                        }
                    )
                }
            </select>
            {
                errors.length > 0 && submitClicked ? 
                    errors.map(
                        error => {
                            return <p>{error}</p>
                        }
                    )
                :
                null
            }

        </div>
    )
}
