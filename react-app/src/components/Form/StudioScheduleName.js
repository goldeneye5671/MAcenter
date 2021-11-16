import React from 'react'

export default function StudioScheduleName({scheduleName, setScheduleName, scheduleDesc, setScheduleDesc, setValidated, setDescVal, submitClicked}) {
    
    const [errors, setErrors] = React.useState([])

    React.useEffect(
        () => {
            const myErrors = [];
            
            if (scheduleDesc.length === 0 || scheduleDesc.length > 1000) {
                myErrors.push("Description must be between 1 and 1000 characters");
            }

            if (scheduleName.length === 0 || scheduleName.length > 255) {
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
            scheduleName,
            scheduleDesc,
            setScheduleName,
            setScheduleDesc,
            setValidated,
            submitClicked
        ]
    )

    return (
        <div>
            <label>Schedule Name</label>
            <input className={"form-field"} value={scheduleName} onChange={e => setScheduleName(e.target.value)}/>
            {
                errors.includes("Schedule name must exist and be between 1 and 255 characters") && submitClicked ?
                    (
                        <p>
                            Schedule name must exist and be between 1 and 255 characters
                        </p>
                    )
                :
                    null
            }

            <label>Schedule Description</label>
            <textarea className={"form-field"} value={scheduleDesc} onChange={e => setScheduleDesc(e.target.value)} />
            <p>{scheduleDesc.length}/1000</p>
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
