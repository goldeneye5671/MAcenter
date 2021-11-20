import React from 'react'

export default function StudioName({studioName, setStudioName, federationId, setFederationId, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);
    const [showFederationId, setShowFederationId] = React.useState(false);
    
    React.useEffect(
        () => {
            const errors = [];

            if (studioName.length === 0 || studioName.length >= 50) {
                errors.push("Studio name must exist and be between 1 and 50 characters");
            }

            if (showFederationId) {
                if (federationId.length === 0 || federationId.length >= 12) {
                    errors.push("Studio's federation ID must exist and be between 1 and 12 characters");
                }
            } else {
                setFederationId("");
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
            studioName,
            federationId,
            showFederationId,
            setValidated,
            setFederationId
        ]
    );

    return (
        <div className={"fields-container"}>
            <div>
                <label>Studio Name</label>
                <input
                    className={"form-field"}
                    value={studioName}
                    onChange={e => setStudioName((e.target.value))}
                />
                {
                    errors.includes("Studio name must exist and be between 1 and 50 characters") && submitClicked ?
                    (
                        <p>
                            Studio name must exist and be between 1 and 50 characters
                        </p>
                    )
                    :
                    null
                }
            </div>

            <div>
                <label>Is your studio a part of a Federation?</label>
                <br />
                <label>Yes</label><input type={"radio"} onChange={e => setShowFederationId(true)} value={true} checked={showFederationId === true}/>
                <br />
                <label>No</label><input type={"radio"} onChange={e => setShowFederationId(false)} value={false} checked={showFederationId === false}/>
                <br/>
                {
                    showFederationId && (
                        <>
                            <label>Studio ID</label>
                            <input 
                                className={"form-field"}
                                type={"input"}
                                value={federationId}
                                onChange={e => setFederationId(e.target.value)}
                            />
                            {
                                errors.includes("Studio's federation ID must exist and be between 1 and 12 characters") && submitClicked ?
                                (
                                    <p>
                                        Studio's federation ID must exist and be between 1 and 12 characters
                                    </p>
                                )
                                :
                                null
                            }
                        </>
                    )
                }
            </div>

            {/* Studio Name and the Federation ID */}
        </div>
    )
}
