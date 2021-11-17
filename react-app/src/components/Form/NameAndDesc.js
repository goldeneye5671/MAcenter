import React from 'react'

export default function NameAndDesc({name, setName, desc, setDesc, setValidated, submitClicked}) {
    
    const [errors, setErrors] = React.useState([])

    React.useEffect(
        () => {
            const myErrors = [];
            
            if (desc.length === 0 || desc.length > 1000) {
                myErrors.push("Description must be between 1 and 1000 characters");
            }

            if (name.length === 0 || name.length > 255) {
                myErrors.push("Schedule name must exist and be between 1 and 255 characters");
            }

            if (myErrors.length > 0) {
                setErrors(myErrors);
                setValidated(false);
            } else {
                setErrors([]);
                setValidated(true)
            }
        },
        [
            name,
            desc,
            setName,
            setDesc,
            setValidated,
            submitClicked
        ]
    )

    return (
        <div>
            <label>Title</label>
            <input className={"form-field"} value={name} onChange={e => setName(e.target.value)}/>
            {
                errors.includes("Schedule name must exist and be between 1 and 255 characters") && submitClicked ?
                    (
                        <p>
                            Name must exist and be between 1 and 255 characters
                        </p>
                    )
                :
                    null
            }

            <label>Description</label>
            <textarea className={"form-field"} value={desc} onChange={e => setDesc(e.target.value)} />
            <p>{desc.length}/1000</p>
            {
                errors.includes("Description must be between 1 and 1000 characters") && submitClicked ? 
                (
                    <p>
                        Description must be between 1 and 1000 characters
                    </p>
                )
                :
                null
            }
        </div>
    )
}
