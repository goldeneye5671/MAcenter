import React from 'react'

export default function StartEndTime({startTime, setStartTime, endTime, setEndTime, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const myErrors = [];

            if (startTime.length === 0) {
                myErrors.push("Please enter a start time");
            }

            if (endTime.length === 0) {
                myErrors.push("Please enter an end time");
            }

            if (myErrors.length > 0) {
                setErrors(myErrors);
                setValidated(false);
            } else {
                const splitStartTime = startTime.split(":");
                const splitEndTime = endTime.split(":");

                if (parseInt(splitStartTime[0]) > parseInt(splitEndTime[0])) {
                    myErrors.push("End time is before start time. Please double check the times entered")
                }

                if (parseInt(splitStartTime[0]) === parseInt(splitEndTime[0]) && (parseInt(splitStartTime[1]) > parseInt(splitEndTime[1]))) {
                    myErrors.push("End time is before start time. Please double check the times entered")

                }

                if (myErrors.length > 0) {
                    setErrors(myErrors);
                    setValidated(false)
                } else {
                    setErrors([]);
                    setValidated(true);
                }
            }
        },
        [
            startTime,
            endTime,
            setStartTime,
            setEndTime,
            submitClicked,
            setValidated
        ]
    )
    
    return (
        <div>

            {
                errors.length > 0 && submitClicked ?
                (
                    errors.map(error => <p>{error}</p>)
                )
                :
                null
            }

            <label>Start Time</label>
            <input className={"form-field"} type="time" value={startTime} onChange={e => setStartTime(e.target.value)} />
                
            <label>End Time</label>
            <input className={"form-field"} type="time" value={endTime} onChange={e => setEndTime(e.target.value)} /> 

        </div>
    )
}
