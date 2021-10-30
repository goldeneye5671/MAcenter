import React from 'react'

import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { removeStudioEventAction } from '../../../store/StudioState';
import StudioEventEditForm from './StudioEventEditForm';


export default function StudioEventContainer({owner, studio_event}) {

    const [edit, setEdit] = React.useState(false)
    const dispatch = useDispatch()

    React.useEffect(() => {

    }, [edit, dispatch, studio_event])

    function deleteEvent(e, studio_event) {
        e.preventDefault();
        dispatch(removeStudioEventAction(studio_event))
    }
    
    return (
        <div>
            {
                owner ? 
                    !edit ? 
                        (
                            <>
                                <h4>{studio_event?.title}</h4>
                                <p>{studio_event?.content}</p>
                                <ul>
                                    <li>{studio_event?.event_date}</li>
                                    <li>{studio_event?.location}</li>
                                    <li>{studio_event.description}</li>
                                </ul>
                                <button onClick={e => setEdit(!edit)}>edit</button>
                                <button onClick={e => deleteEvent(e, studio_event)}>delete</button>
                            </>    
                        )
                    :
                        (
                            <>
                                <StudioEventEditForm studio_event={studio_event} edit={edit} setEdit={setEdit} />
                                <h4>{studio_event?.title}</h4>
                                <p>{studio_event?.content}</p>
                                <ul>
                                    <li>{studio_event?.event_date}</li>
                                    <li>{studio_event?.location}</li>
                                    <li>{studio_event.description}</li>
                                </ul>
                                <button onClick={e => setEdit(!edit)}>edit</button>
                                <button onClick={e => deleteEvent(e, studio_event)}>delete</button>
                            </>    
                        )
                :
                (
                    <>
                        <h4>{studio_event?.title}</h4>
                        <p>{studio_event?.content}</p>
                        <ul>
                            <li>{studio_event?.event_date}</li>
                            <li>{studio_event?.location}</li>
                        </ul>
                    </>    
                )
            }
        </div>
    )
}
