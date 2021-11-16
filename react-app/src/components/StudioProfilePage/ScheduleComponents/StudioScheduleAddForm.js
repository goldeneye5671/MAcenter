import React from 'react'
import { useDispatch } from 'react-redux';
import { createStudioScheduleAction } from '../../../store/StudioState';
import  ReactDOM  from 'react-dom';
import StartEndTime from '../../Form/StartEndTime';
import DayPicker from '../../Form/DayPicker';
import StudioScheduleName from '../../Form/StudioScheduleName';

export default function StudioScheduleAddForm({studioId, edit, setEdit}) {

    const [schedule_name, set_schedule_name] = React.useState('');
    const [schedule_description, set_schedule_description] = React.useState('');
    const [studio_id, set_studio_id] = React.useState(studioId);
    const [week_day, set_week_day] = React.useState('');
    const [start_time, set_start_time] = React.useState('');
    const [end_time, set_end_time] = React.useState('');

    const [studioScheduleNameValidated, setStudioScheduleNameValidated] = React.useState(false)
    const [weekDayValidated, setWeekDayValidated] = React.useState(false)
    const [timeCompValidated, setTimeCompValidated] = React.useState(false)

    const [submitClicked, setSubmitClicked] = React.useState(false)

    const dispatch = useDispatch();

    function submit(e) {
        e.preventDefault();
        setSubmitClicked(true);

        if (studioScheduleNameValidated && weekDayValidated && timeCompValidated) {
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

                <StudioScheduleName
                    scheduleName={schedule_name}
                    scheduleDesc={schedule_description}
                    setScheduleName={set_schedule_name}
                    setScheduleDesc={set_schedule_description}
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

                <button onClick={submit}>create schedule</button>
                <button onClick={e => setEdit(!edit)}>Cancel</button>

            </form>
        </div>
    </>,
    document.getElementById("portal")
    )
}
