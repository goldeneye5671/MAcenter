import React from 'react'

export default function Phone({phone, setPhone, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);
    
    React.useEffect(
        () => {
            const errors = [];
            if (phone.length === 0 || phone.length > 15) {
                errors.push("Phone number must be between 1 and 15 characters")
            }

            if (errors.length > 0) {
                setErrors(errors);
                setValidated(false);
            } else {
                setValidated(true);
                setErrors([]);
            }
        },
        [
            phone,
            setPhone,
            submitClicked,
            setValidated
        ]
    )

    return (
        <div className={"fields-container"}>
            <div>
                <label>Phone</label>
                <input
                    className={"form-field"}
                    type={"input"} 
                    value={phone} 
                    onChange={e => {setPhone(e.target.value)}}
                />
                {
                    errors.includes("Phone number must be between 1 and 15 characters") && submitClicked ?
                    (
                        <p>
                            Phone number must be between 1 and 15 characters
                        </p>
                    )
                    :
                    null
                }
            </div>
        </div>
    )
}
