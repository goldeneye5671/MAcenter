import React from 'react'

export default function MartialArt({martialArt, setMartialArt, martialArts, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const myErrors = [];
            if (!martialArt) {
                errors.push("Please select a martial art");
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
            setValidated
        ]
    ) 
    
    return (
        <div>
            <label>Studio art</label>
            <select value={martialArt} onChange={e => setMartialArt(e.target.value)}>
                <option>Select Martial Art</option>
                {martialArts.map( art => (<option value={art.id}>{art.name}</option>)
                )}
            </select>
            {
                errors.includes("Please select a martial art") && submitClicked ? 
                (
                    <p>
                        Please select a martial art
                    </p>
                )
                :
                null
            }

        </div>
    )
}
