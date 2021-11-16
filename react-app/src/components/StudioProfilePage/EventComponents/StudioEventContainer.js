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
        <div >
            {
                owner ? 
                    !edit ? 
                        (
                            <div>
                                <div className="headers">
                                    <h4>{studio_event?.title}</h4>
                                    <p>{studio_event?.event_date}</p>
                                    <div>{studio_event?.location}</div>
                                </div>
                                <div className={"studio-event-content"}>
                                    <div>
                                        {studio_event.description}
                                    </div>
                                </div>
                                <div className={"edit-and-delete-button-container"}>
                                    <button onClick={e => setEdit(!edit)}>edit</button>
                                    <button onClick={e => deleteEvent(e, studio_event)}>delete</button>
                                </div>
                            </div>    
                        )
                    :
                        (
                            <div>
                                <StudioEventEditForm studio_event={studio_event} edit={edit} setEdit={setEdit} />
                                <div>
                                    <div className="headers">
                                        <h4>{studio_event?.title}</h4>
                                        <p>{studio_event?.event_date}</p>
                                        <div>{studio_event?.location}</div>
                                    </div>
                                    <div className={"studio-event-content"}>
                                        <div>
                                            {studio_event.description}
                                        </div>
                                    </div>
                                    <div className={"edit-and-delete-button-container"}>
                                        <button onClick={e => setEdit(!edit)}>edit</button>
                                        <button onClick={e => deleteEvent(e, studio_event)}>delete</button>
                                    </div>
                                </div>  
                            </div>  
                        )
                :
                (
                    <div>
                        <div className="headers">
                            <h4>{studio_event?.title}</h4>
                            <p>{studio_event?.event_date}</p>
                            <div>{studio_event?.location}</div>
                        </div>
                        <div className={"studio-event-content"}>
                            <div>
                                {studio_event.description}
                            </div>
                        </div>
                    </div>    
                )
            }
        </div>
    )
}
