import React from 'react'

export default function DayPicker({weekDay, setWeekDay, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const myErrors = [];

            if (weekDay === "") {
                myErrors.push("Please select a weekday")
            }

            if (myErrors.length > 0) {
                setErrors(myErrors);
                setValidated(false);
            } else {
                setErrors([]);
                setValidated(true);
            }
        },
        [
            weekDay,
            setWeekDay,
            submitClicked,
            setValidated
        ]
    )
    
    return (
        <div>
            <label>Day</label>
            <select value={weekDay} onChange={e => setWeekDay(e.target.value)}>
                <option value={""}>Please select a day</option>
                <option value={"Monday"}>Monday</option>
                <option value={"Tuesday"}>Tuesday</option>
                <option value={"Wednesday"}>Wednesday</option>
                <option value={"Thursday"}>Thursday</option>
                <option value={"Friday"}>Friday</option>
            </select>
            {
                errors.includes("Please select a weekday") && submitClicked ? 
                (
                    <p>Please select a weekday</p>
                )
                :
                null
            }
        </div>
    )
}
