import React from 'react'

import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { removeStudioEventAction } from '../../../store/StudioState';

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
