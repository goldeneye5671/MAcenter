import React from 'react'
import { useDispatch } from 'react-redux';
import { createStudioEventAction } from '../../../store/StudioState';
import  ReactDOM  from 'react-dom';

import NameAndDesc from '../../Form/NameAndDesc';
import StartEndTime from '../../Form/StartEndTime';
import Address from '../../Form/Address';
import DatePicker from '../../Form/DatePicker';


export default function StudioEventAddForm({setEdit, edit, studio_id}) {
    const [title, set_title] = React.useState('');
    const [description, set_description] = React.useState('');
    const [date, set_date] = React.useState('');
    const [start_time, set_start_time] = React.useState('');
    const [end_time, set_end_time] = React.useState('');
    const [location, set_event_location] = React.useState('');

    const [submitClicked, setSubmitClicked] = React.useState(false)

    const [studioEventNameValidated, setStudioEventNameValidated] = React.useState(false);
    const [studioEventDateValidated, setStudioEventDateValidated] = React.useState(false)
    const [studioEventTimeValidated, setStudioEventTimeValidated] = React.useState(false);
    const [studioEventAddressValidated, setStudioEventAddressValidated] = React.useState(false);


    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault();
        setSubmitClicked(true);
        if (studioEventNameValidated && studioEventAddressValidated && studioEventDateValidated && studioEventTimeValidated) {
            const studioEvent = {
                title,
                description,
                date,
                start_time,
                end_time,
                location,
                studio_id
            }
            dispatch(createStudioEventAction(studioEvent))
            setEdit(!edit);
        }
    }
    if (!edit) return null;
    return ReactDOM.createPortal(
        <>
        <div className="overlay-styles"></div>
        <div className={"form-container modal-styles"}>
            <form className={"form"}>
            <h1>Add Event</h1>

            <NameAndDesc
                name={title}
                desc={description}
                setName={set_title}
                setDesc={set_description}
                setValidated={setStudioEventNameValidated}
                submitClicked={submitClicked}
            />

            <Address
                address={location}
                setAddress={set_event_location}
                setValidated={setStudioEventAddressValidated}
                submitClicked={submitClicked}
            />

            <DatePicker
                date={date}
                setDate={set_date}
                submitClicked={submitClicked}
                setValidated={setStudioEventDateValidated}
            />

            <StartEndTime
                startTime={start_time}
                setStartTime={set_start_time}
                endTime={end_time}
                setEndTime={set_end_time}
                setValidated={setStudioEventTimeValidated}
                submitClicked={submitClicked}
            />

            <div className={"edit-and-delete-button-container"}>
                <button onClick={submit}>create event</button>
                <button onClick={e => {e.preventDefault(); setEdit(!edit)}}>cancel</button>
            </div>

        </form>
        </div>
        </>
        ,
        document.getElementById('portal')
    )
}
