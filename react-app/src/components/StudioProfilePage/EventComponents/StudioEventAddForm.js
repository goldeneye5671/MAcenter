import React from 'react'
import { useDispatch } from 'react-redux';
import { createStudioEventAction } from '../../../store/StudioState';
import  ReactDOM  from 'react-dom';

export default function StudioEventAddForm({setEdit, edit, studio_id}) {
    const [title, set_title] = React.useState('');
    const [description, set_description] = React.useState('');
    const [event_date, set_event_date] = React.useState();
    const [location, set_event_location] = React.useState('');

    const [errors, setErrors] = React.useState([]);

    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault();
        let errors = [];
        if (!title) errors.push("please provide an event title");
        if (!description) errors.push("please provide a description");
        if (!event_date) errors.push("please provide an event date");
        if (!location) errors.push("please provide a location for the event");
        if (!errors.length) {
            const studioEvent = {
                title,
                description,
                event_date: new Date(event_date),
                location,
                studio_id
            }
            console.log(studioEvent)
            dispatch(createStudioEventAction(studioEvent))
            setEdit(!edit);
        } else {
            setErrors(errors)
        }
    }
    if (!edit) return null;
    return ReactDOM.createPortal(
        <>
        <div className="overlay-styles"></div>
        <div className={"modal-styles form-container"}>
            <form className={"form"}>
            <h1>Add Event</h1>
            {
                errors.length > 0 &&
                (<ul>
                    {errors.map(error => <li>{error}</li>)}
                </ul>)
            }

            <label>Title of event</label>
            <input onChange={e => set_title(e.target.value)}></input>

            <label>Description</label>
            <textarea onChange={e => set_description(e.target.value)}></textarea>

            <label>Event Date</label>
            <input type="date" onChange={e => set_event_date(e.target.value)}></input>

            <label>location</label>
            <input onChange={e => set_event_location(e.target.value)}></input>

            <button onClick={submit}>create event</button>
            <button onClick={e => {e.preventDefault(); setEdit(!edit)}}>cancel</button>
        </form>
        </div>
        </>
        ,
        document.getElementById('portal')
    )
}
