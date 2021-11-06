import React from 'react'

export default function UserName({firstName, lastName, setFirstName, setLastName, submitClicked}) {
    
    const [errors, setErrors] = React.useState([])

    React.useEffect(
        () => {
            const errors = [];
            //checking to see if the length is between 1 and 50
            if (firstName.length === 0 || firstName.length > 50) {
                errors.push("First Name must exist and be between 1 and 50 characters")
            }

            if (lastName.length === 0 || lastName.length > 50) {
                errors.push("Last Name must exist and be between 1 and 50 characters");
            }

            if (errors) {
                setErrors(errors);
            }else{
                setErrors([]);
            }
        },
        [
            firstName,
            lastName,
            submitClicked
        ]
    )
    
    return (
        <div className={"fields-container"}>
            <div>
                <label>First Name</label>
                {
                    //check to see if the error was created
                    errors.includes("First Name must exist and be between 1 and 50 characters") && submitClicked ?
                        (
                            <p className={"errors"}>
                                First Name must exist and be between 1 and 50 characters
                            </p>
                        )
                        :
                        null
                }
                <input className={"form-field"} value={firstName} onChange={e => setFirstName(e.target.value)} placeholder={"Demo"} />
            </div>
            <div>
                <label>Last Name</label>
                {
                    errors.includes("Last Name must exist and be between 1 and 50 characters") && submitClicked?
                        (
                            <p className={"errors"}>
                                Last Name must exist and be between 1 and 50 characters
                            </p>
                        )
                        :
                        null
                }
                <input className={"form-field"} value={lastName} onChange={e => setLastName(e.target.value)} placeholder={"lition"} />
            </div>
        </div>
    )
}
