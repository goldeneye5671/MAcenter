import React from 'react'

export default function StudioClassSchedule({schedule}) {
    return (
        <div>
            <h4>{schedule.class_name}</h4>
            <ul>
                <li>Start Time: {schedule.start_time}</li>
                <li>End Time: {schedule.end_time}</li>
            </ul>
        </div>
    )
}
