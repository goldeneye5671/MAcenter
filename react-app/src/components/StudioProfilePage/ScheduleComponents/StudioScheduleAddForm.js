import React from 'react'
import { useDispatch } from 'react-redux';
import { createStudioScheduleAction } from '../../../store/StudioState';
import  ReactDOM  from 'react-dom';

export default function StudioScheduleAddForm({studioId, edit, setEdit}) {

    const [schedule_name, set_schedule_name] = React.useState('');
    const [schedule_description, set_schedule_description] = React.useState('');
    const [studio_id, set_studio_id] = React.useState(studioId);
    const [week_day, set_week_day] = React.useState('');
    const [start_time, set_start_time] = React.useState('');
    const [end_time, set_end_time] = React.useState('')

    const [errors, setErrors] = React.useState([])

    const dispatch = useDispatch();

    function submit(e) {
        e.preventDefault();
        const errors = [];
        if (!schedule_name) errors.push("Please provide a name for the schedule");
        if (!schedule_description) errors.push("Please provide a description for the schedule");
        if (!studio_id) errors.push("You do not have the ability to add or modify studio schedules");
        if (!week_day) errors.push("Please select a weekday");
        if (!start_time) errors.push("Please enter a start time");
        if (!end_time) errors.push("Please enter an end time");
        if (errors.length > 0){
            setErrors(errors);
        }else {
            const studioSchedule = {
                schedule_name,
                schedule_description,
                studio_id,
                week_day,
                start_time,
                end_time
            }
            dispatch(createStudioScheduleAction(studioSchedule))
            setEdit(!edit);
        }
    }

    return ReactDOM.createPortal(
        <>
        <div className={"overlay-styles"}></div>
        <div className={"form-container modal-styles"}>
            <form className={"form"}>
                <h1>Create Schedule</h1>

                {
                    errors.length > 0 && <ul>{errors.map(error => <li>{error}</li>)}</ul>
                }

                <label>Schedule Name</label>
                <input className={"form-field"} value={schedule_name} onChange={e => set_schedule_name(e.target.value)}/>

                <label>Schedule Description</label>
                <textarea className={"form-field"} value={schedule_description} onChange={e => set_schedule_description(e.target.value)} />

                <label>Day</label>
                <select value={week_day} onChange={e => set_week_day(e.target.value)}>
                    <option value={null}>Please select a day</option>
                    <option value={"Monday"}>Monday</option>
                    <option value={"Tuesday"}>Tuesday</option>
                    <option value={"Wednesday"}>Wednesday</option>
                    <option value={"Thursday"}>Thursday</option>
                    <option value={"Friday"}>Friday</option>
                </select>

                <label>Start Time</label>
                <input className={"form-field"} type="time" value={start_time} onChange={e => set_start_time(e.target.value)} />
                
                <label>End Time</label>
                <input className={"form-field"} type="time" value={end_time} onChange={e => set_end_time(e.target.value)} /> 

                <button onClick={submit}>create schedule</button>
                <button onClick={e => setEdit(!edit)}>Cancel</button>

            </form>
        </div>
    </>,
    document.getElementById("portal")
    )
}
