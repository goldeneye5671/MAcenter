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
        dispatch(fetchOneStudioAction(studioId))
    }, [dispatch, studioId])
    
    
    return (
        <>
        <div className={"headers"}>
            <h3>Events</h3>
            {owner && (<button onClick={e => setEdit(!edit)}>add event</button>)}
        </div>
        <div className={"studio-profile-container"}>
            <>
                {
                    owner ?
                    // Edit here is referrring to creating a new event
                        !edit ?
                            <>
                                
                                {
                                    studioEvents.map(studio_event => {
                                        return (
                                            <div className={"studio-profile-event"}>
                                                <StudioEventContainer owner={owner} studio_event={studio_event} />
                                            </div>
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
                                        <div className={"studio-profile-event"}>
                                            <StudioEventContainer owner={owner} studio_event={studio_event} />
                                        </div>
                                            )
                                        })        
                                    }
                            </>
                    :

                        <>
                        {
                            studioEvents.map(studio_event => {
                                return (
                                        <div className={"studio-profile-event"}>
                                            <StudioEventContainer owner={owner} studio_event={studio_event} />
                                        </div>
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
        </>
    )
}
