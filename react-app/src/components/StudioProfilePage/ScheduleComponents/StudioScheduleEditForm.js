import React from 'react'
import { updateStudioScheduleAction } from '../../../store/StudioState';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom'

import StartEndTime from '../../Form/StartEndTime';
import DayPicker from '../../Form/DayPicker';
import NameAndDesc from '../../Form/NameAndDesc';


export default function StudioScheduleEditForm({studioSchedule, edit, setEdit}) {

    const [schedule_name, set_schedule_name] = React.useState(studioSchedule.schedule_name);
    const [schedule_description, set_schedule_description] = React.useState(studioSchedule.schedule_description)
    const [studio_id, set_studio_id] = React.useState(studioSchedule.studio_id);
    const [week_day, set_week_day] = React.useState(studioSchedule.week_day);
    const [start_time, set_start_time] = React.useState(studioSchedule.start_time);
    const [end_time, set_end_time] = React.useState(studioSchedule.end_time)

    const [studioScheduleNameValidated, setStudioScheduleNameValidated] = React.useState(false)
    const [weekDayValidated, setWeekDayValidated] = React.useState(false)
    const [timeCompValidated, setTimeCompValidated] = React.useState(false)

    const [submitClicked, setSubmitClicked] = React.useState(false);

    const dispatch = useDispatch();

    function submit(e) {
        e.preventDefault();
        setSubmitClicked(true);
        if (studioScheduleNameValidated && weekDayValidated && timeCompValidated) {
            const studio_schedule = {
                schedule_name,
                schedule_description,
                studio_id,
                week_day,
                start_time,
                end_time
            }
            dispatch(updateStudioScheduleAction(studioSchedule.id, studio_schedule));
            setEdit(!edit);        
        }
    }

    return ReactDOM.createPortal(
        <>
        <div className={"overlay-styles"}></div>
        <div className={"form-container modal-styles"}>
            <form className={"form"}>
                <h1>Edit schedule</h1>

                <NameAndDesc
                    name={schedule_name}
                    desc={schedule_description}
                    setName={set_schedule_name}
                    setDesc={set_schedule_description}
                    setValidated={setStudioScheduleNameValidated}
                    submitClicked={submitClicked}
                />

                <DayPicker 
                    weekDay={week_day}
                    setWeekDay={set_week_day}
                    submitClicked={submitClicked}
                    setValidated={setWeekDayValidated}
                />

               <StartEndTime
                    startTime={start_time}
                    setStartTime={set_start_time}
                    endTime={end_time}
                    setEndTime={set_end_time}
                    setValidated={setTimeCompValidated}
                    submitClicked={submitClicked}
                />

                <button onClick={submit}>update schedule</button>
                <button onClick={e => setEdit(!edit)}>Cancel</button>

            </form>
        </div>
        </>,
        document.getElementById("portal")
    )
}
