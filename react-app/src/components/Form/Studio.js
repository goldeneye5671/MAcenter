import React from 'react'

export default function Studio({studios, studio, setStudio, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);
    
    React.useEffect(
        () => {
            const myErrors = [];

            if (studio === 'null') {
                myErrors.push("Please select a studio")
            }

            if (myErrors.length > 0) {
                setErrors(myErrors)
                setValidated(false);
            } else {
                setErrors([]);
                setValidated(true);
            }
        },
        [
            studios,
            studio,
            setStudio,
            submitClicked,
            setValidated
        ]
    )

    return (
        <div>
            <label>Studio</label>
                <select value={studio} onChange={e => setStudio(e.target.value)}>
                <option value={"null"}>Select Studio</option>
                {
                    studios.map(
                        studio => (
                            <option value={studio.id}>{studio.name}</option>
                        )
                    )
                }
            </select>
            {
                (errors.length > 0 && submitClicked) && 
                errors.map(
                    error => {
                        return <p>{error}</p>
                    }
                )
            }
        </div>
    )
}
