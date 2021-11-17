import React from 'react'

export default function Email({email, setEmail, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([])

    React.useEffect(
        () => {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
            const errors = [];

            if (email.length === 0 || email.length > 255) {
                errors.push("Email must be between 0 and 255 characters")
            }

            if (!email.match(emailRegex)) {
                errors.push("Provided email is not valid")
            }

            if (errors.length > 0) {
                setErrors(errors);
                setValidated(false);
            } else {
                setErrors([]);
                setValidated(true);
            }
        },
        [
            email,
            submitClicked,
            setValidated
        ]
    )

    return (
        <div className={"fields-container"}>
            <div>
                <label>Email</label>
                {
                    errors.includes("Email must be between 0 and 255 characters") && submitClicked ?
                    (
                        <p>
                            Email must be between 1 and 255 characters
                        </p>
                    )
                    :
                    null
                }
                {
                    errors.includes("Provided email is not valid") && submitClicked ?
                    (
                        <p>
                            Provided email is not valid
                        </p>
                    )
                    :
                    null
                }
                <input className={"form-field"} value={email} onChange={e => setEmail(e.target.value)} />
            </div>
        </div>
    )
}
