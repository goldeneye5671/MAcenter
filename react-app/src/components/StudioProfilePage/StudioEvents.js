import React from 'react'
import StudioEventContainer from './StudioEventContainer'

export default function StudioEvents({studio}) {
    return (
        <div>
            <h3>Events</h3>
            {studio?.studio_events?.map(studio_event => <StudioEventContainer studio_event={studio_event}/>)}
        </div>
    )
}
