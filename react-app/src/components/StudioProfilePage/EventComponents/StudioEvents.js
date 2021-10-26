import React from 'react'
import StudioEventContainer from './StudioEventContainer'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneStudioAction, removeStudioEventAction } from '../../../store/StudioState'
import { useParams } from 'react-router-dom'
import StudioEventEditForm from './StudioEventEditForm'

export default function StudioEvents({owner}) {
    const dispatch = useDispatch()
    const {studioId} = useParams();
    const studio = useSelector(state => state.studios[studioId])

    const [edit, setEdit] = React.useState(false)

    function test(){
        console.log("edit", edit);
    }

    function deleteEvent(e, studio_event) {
        e.preventDefault();
        dispatch(removeStudioEventAction(studio_event))
        dispatch(fetchOneStudioAction(studioId))
    }

    React.useState(() => {
        dispatch(fetchOneStudioAction(studioId))
    }, [dispatch, studioId, edit])
    
    
    return (
        <div>
            <h3>Events</h3>
            {
                Object.keys(studio?.studio_events).length ? 
                    owner ?
                        
                        Object.values(studio?.studio_events).map(studio_event => {
                            return( 
                                    !edit ? 
                                    (
                                        <>
                                            <StudioEventContainer studio_event={studio_event}/>
                                            <button onClick={e => setEdit(!edit)}>edit</button>
                                            <button onClick={e => deleteEvent(e, studio_event)}>delete</button>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <StudioEventEditForm studio_event={studio_event} edit={edit} setEdit={setEdit}/>
                                        </>
                                    )
                                )
                        })
                    :
                        Object.values(studio?.studio_events).map(studio_event => <StudioEventContainer studio_event={studio_event}/>)
                :
                    (<p>no events</p>)
            }
        </div>
    )
}
