import React from 'react'

export default function StudioClassSchedule({schedule}) {
    return (
        <div>
            <h4>{schedule.class_name}</h4>
            <ul>
                <li>Start Time: {schedule.start_timestamp}</li>
                <li>End Time: {schedule.end_timestamp}</li>
            </ul>
        </div>
    )
}
