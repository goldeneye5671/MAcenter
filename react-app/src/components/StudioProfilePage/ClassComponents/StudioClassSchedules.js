import React from 'react'
import StudioClassSchedule from './StudioClassSchedule'

export default function StudioClassSchedules({studio}) {
    return (
        <>
        <h4>Studio Schedules</h4>
        <div>
            {Object.values(studio?.studio_schedule).map(schedule => <StudioClassSchedule schedule={schedule} />)}
        </div>
        </>
    )
}
