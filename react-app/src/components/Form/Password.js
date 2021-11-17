import React from 'react'

export default function Password({single, password, setPassword, verifyPassword, setVerifyPassword, submitClicked, setValidated}) {

    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const passwordRegex = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
            const errors = [];
            if (!single) {
                if (!password.match(passwordRegex)){
                    errors.push("Password not secure enough.\nMust contain at least one of the following:\nan uppercase letter\nlowercase letters\na number\na special character");
                }

                if (password !== verifyPassword) {
                    errors.push("Passwords must match");
                }
            }

            if (password.length === 0 || password.length > 255) {
                errors.push("Password must be between 0 and 255 characters");
            }
            


            if (errors.length > 0) {
                setErrors(errors);
                setValidated(false)
            } else{
                setErrors([]);
                setValidated(true);
            }
        },
        [
            password,
            verifyPassword,
            submitClicked,
            single,
            setValidated
        ]
    )
        if (!single) {
            return (
                <div className={"fields-container"}>
                    <div>
                        <label>Password</label>
                        {
                            errors.includes("Password must be between 0 and 255 characters") && submitClicked ?
                            (
                                <p>
                                    Password must be between 0 and 255 characters
                                </p>
                            )
                            :
                            null
        
                        }
        
                        {
                            errors.includes("Password not secure enough.\nMust contain at least one of the following:\nan uppercase letter\nlowercase letters\na number\na special character") && submitClicked ?
                            (
                                <>
                                <p>Password not secure enough. Must contain at least one of the following:</p>
                                <ul className={"errors"}>
                                    <li>an uppercase letter</li>
                                    <li>lowercase letters</li>
                                    <li>a number</li>
                                    <li>a special character</li>
                                </ul>
                                </>
                            )
                            :
                            null
                        }
        
                        <input className={"form-field"} type={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>  
                    <div>
                        <label>Verify Password</label>
                        {
                            errors.includes("Passwords must match") && submitClicked ?
                            (
                                <p>
                                    Passwords must match
                                </p>
                            )
                            :
                            null
                        }
                        <input className={"form-field"} type={"password"} value={verifyPassword} onChange={e => setVerifyPassword(e.target.value)}/>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    {
                        errors.includes("Password must be between 0 and 255 characters") && submitClicked ?
                        (
                            <p>
                                Password must be between 0 and 255 characters
                            </p>
                        )
                        :
                        null
                    }    
                    <label>Password</label>
                    <input className={"form-field"} type={"password"} value={password} onChange={e => setPassword(e.target.value)}/>
                </>

            )
        }
}
