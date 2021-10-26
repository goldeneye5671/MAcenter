import React from 'react'
import StudioEventContainer from './StudioEventContainer'
import { useSelector, useDispatch } from 'react-redux'
import { removeStudioEventAction } from '../../store/StudioState'
import { useParams } from 'react-router-dom'

export default function StudioEvents({owner}) {
    const dispatch = useDispatch()
    const {studioId} = useParams();
    const studio = useSelector(state => state.studios[studioId])
    React.useState(() => {

    }, [dispatch, studioId])
    return (
        <div>
            <h3>Events</h3>
            {
                Object.keys(studio?.studio_events).length ? 
                    owner ?
                        Object.values(studio?.studio_events).map(studio_event => {
                            return( 
                                <>
                                    <StudioEventContainer studio_event_id={studio_event.id}/>
                                    <button>edit</button>
                                    <button onClick={e => dispatch(removeStudioEventAction(studio_event))}>delete</button>
                                </>
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
