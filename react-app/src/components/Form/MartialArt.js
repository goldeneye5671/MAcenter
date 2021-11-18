import React from 'react'

export default function MartialArt({martialArt, setMartialArt, martialArts, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const myErrors = [];

            
            if (martialArt === "0") {
                myErrors.push("no art selected");
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
            submitClicked
        ]
    ) 
    
    return (
        <div>
            <label>Studio art</label>
            <select value={martialArt} onChange={e => setMartialArt(e.target.value)}>
                <option value={"0"}>Select Martial Art</option>
                {
                    martialArts.map( 
                        art => (<option value={art.id}>{art.name}</option>)
                    )
                }
            </select>
            {
                errors.includes("")
            }

        </div>
    )
}
