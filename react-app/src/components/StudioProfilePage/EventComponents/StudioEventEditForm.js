import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchOneStudioAction, updateStudioAction, updateStudioEventAction } from '../../../store/StudioState';
import ReactDOM from 'react-dom'

export default function StudioEventEditForm({studio_event, edit, setEdit}) {
    const [title, set_title] = React.useState(studio_event.title);
    const [description, set_description] = React.useState(studio_event.description);
    const [event_date, set_event_date] = React.useState(studio_event.event_date);
    const [location, set_event_location] = React.useState(studio_event.location);

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
                studio_id: studio_event.studio_id
            }
            dispatch(updateStudioEventAction(studio_event.id, studioEvent))
            dispatch(fetchOneStudioAction(studio_event.studio_id))
            setEdit(!edit)
        } else {
            setErrors(errors)
        }
    }
    
    return ReactDOM.createPortal(
        <>
        <div className={"overlay-styles"}></div>
        <div className={"form-container modal-styles"}>
            <form className={"form"}>
                <h1>Edit Event</h1>
                {
                    errors.length > 0 &&
                    (<ul>
                        {errors.map(error => <li>{error}</li>)}
                    </ul>)
                }

                <label>Title of event</label>
                <input className={"form-field"}  value={title} onChange={e => set_title(e.target.value)}></input>

                <label>Description</label>
                <textarea className={"form-field"}  value={description} onChange={e => set_description(e.target.value)}></textarea>

                <label>Event Date</label>
                <input  className={"form-field"} value={event_date} type="date" onChange={e => set_event_date(e.target.value)}></input>
                <p>Original date was: {studio_event.event_date}</p>

                <label>location</label>
                <input className={"form-field"}  value={location} onChange={e => set_event_location(e.target.value)}></input>
                <div className={"edit-and-delete-button-container"}>
                    <button onClick={submit}>update event</button>
                    <button onClick={e => {e.preventDefault(); setEdit(!edit)}}>cancel</button>
                </div>
            </form>
        </div>
        </>,
        document.getElementById('portal')
    )
}
