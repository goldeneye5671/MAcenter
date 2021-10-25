import React from 'react'

export default function StudioEventContainer({studio_event}) {
    return (
        <div>
            <h4>{studio_event?.title}</h4>
            <p>{studio_event?.content}</p>
            <ul>
                <li>{studio_event?.event_date}</li>
                <li>{studio_event?.location}</li>
            </ul>
        </div>
    )
}
