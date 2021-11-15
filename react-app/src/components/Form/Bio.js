import React from 'react'

export default function Bio({bio, setBio, submitClicked, setValidated}) {

    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const errors = [];

            if (bio.length === 0 || bio.length >= 2000 ) {
                errors.push("Bio must be between 1 and 2000 characters")
            }

            if (errors.length > 0) {
                setErrors(errors);
                setValidated(false)
            } else {
                setErrors([]);
                setValidated(true)
            }
        },
        [
            bio,
            submitClicked,
            setValidated
        ]
    )
        return (
            <>
                {
                    errors.includes("Bio must be between 1 and 2000 characters") && submitClicked ?
                        (
                            <>
                                <p>Bio must be between 1 and 2000 characters</p>
                            </>
                        )
                        :
                        null
                }
                <label>Bio</label>
                <textarea className={"form-field"} value={bio.length <= 20000 ? bio : null} onChange={e => setBio(e.target.value)} />
                <p>{bio.length}/2000</p>
            </>
        )
}
