import React from 'react'

import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

export default function StudioEventContainer({studio_event_id}) {
    const {studioId} = useParams();
    const studio_event = useSelector(state => state.studios[studioId].studio_events[studio_event_id]);

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
