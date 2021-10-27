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
    const studioEvents = useSelector(state => Object.values(state.studios[studioId].studio_events))

    React.useState(() => {
        dispatch(fetchOneStudioAction(studioId))
    }, [dispatch, studioId])
    
    
    return (
        <div>
            <h3>Events</h3>
            {
                Object.keys(studio?.studio_events).length ? 
                    owner ?
                        
                        studioEvents.map(studio_event => {
                            return(   
                                <>
                                    <StudioEventContainer owner={owner} studio_event={studio_event}/>
                                </>        
                            )
                        })
                    :
                        studioEvents.map(studio_event => <StudioEventContainer owner={owner} studio_event={studio_event}/>)
                :
                    (<p>no events</p>)
            }
        </div>
    )
}
