import React from 'react'

export default function DatePicker({date, setDate, submitClicked, setValidated}) {
    const [errors, setErrors] = React.useState([]);

    React.useEffect(
        () => {
            const myErrors = [];

            if (date.length === 0) {
                myErrors.push("Date is required")
            }

            if (myErrors.length > 0) {
                setErrors(myErrors);
                setValidated(false);
            } else {
                const currentTimestamp = new Date();
                const newTimestamp = new Date(date);
                if (currentTimestamp.getTime() >= newTimestamp.getTime()) {
                    myErrors.push("Please select a date in the future. The current date is in the past");
                }

                if (myErrors.length > 0) {
                    setErrors(myErrors);
                    setValidated(false);
                } else {
                    setErrors([]);
                    setValidated(true);
                }
            }
        },
        [
            date,
            setDate,
            submitClicked,
            setValidated
        ]
    )

    return (
        <div>
            <label>Date</label>
            <input 
                className={"form-field"}
                type={"date"}
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            {
               errors.includes("Please select a date in the future. The current date is in the past") && submitClicked ? 
               (
                   <p>
                       Please select a date in the future. The current date is in the past
                   </p>
               )
               :
               null 
            }   
        </div>
    )
}
