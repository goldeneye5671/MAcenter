import React from 'react'

export default function MartialArt({martialArt, setMartialArt, martialArts, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const errors = [];
            if (martialArt === null) {
                errors.push("Please select a martial art");
            }
            if (errors.length > 0) {
                setErrors(errors);
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
                errors.includes("Please select a martail art") && submitClicked ? 
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
