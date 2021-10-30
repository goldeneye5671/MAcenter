import React from 'react'
import StudioEventContainer from './StudioEventContainer'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneStudioAction, removeStudioEventAction } from '../../../store/StudioState'
import { useParams } from 'react-router-dom'
import StudioEventEditForm from './StudioEventEditForm'
import StudioEventAddForm from './StudioEventAddForm'

export default function StudioEvents({owner}) {
    const dispatch = useDispatch();
    const {studioId} = useParams();
    const [edit, setEdit] = React.useState(false)
    const studio = useSelector(state => state.studios[studioId])
    const studioEvents = useSelector(state => Object.values(state.studios[studioId].studio_events))

    React.useState(() => {
        console.log(edit)
        dispatch(fetchOneStudioAction(studioId))
    }, [dispatch, studioId])
    
    
    return (
        <div>
            <h3>Events</h3>
            <>
                {
                    owner ?
                    // Edit here is referrring to creating a new event
                        !edit ?
                            <>
                                <button onClick={e => setEdit(!edit)}>add event</button>
                                {
                                    studioEvents.map(studio_event => {
                                        return (
                                            <StudioEventContainer owner={owner} studio_event={studio_event} />
                                        )
                                    })
                                }
                            </>
                        :
                            <>
                                <StudioEventAddForm setEdit={setEdit} edit={edit} studio_id={studioId} />
                                {
                                    studioEvents.map(studio_event => {
                                        return (
                                            <StudioEventContainer owner={owner} studio_event={studio_event} />
                                        )
                                    })        
                                }
                            </>
                    :
                        <>
                            {
                                studioEvents.map(studio_event => {
                                    return (
                                        <StudioEventContainer owner={owner} studio_event={studio_event} />
                                    )
                                })
                            }
                        </>
                }
                {
                    studioEvents.length === 0 && (
                        <p>No events</p>
                    )
                }
            </>
        </div>
    )
}
