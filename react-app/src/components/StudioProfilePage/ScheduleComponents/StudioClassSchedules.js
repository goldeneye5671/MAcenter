import React from 'react'
import StudioScheduleAddForm from './StudioScheduleAddForm'
import StudioClassSchedule from './StudioClassSchedule'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

export default function StudioClassSchedules({owner}) {
    const {studioId} = useParams();
    const studioSchedule = useSelector(state => Object.values(state.studios[studioId].studio_schedule))
    const [edit, setEdit] = React.useState(false)

    return (
        <>
        <h4 className={"headers-center-only"}>Studio Schedules</h4>
        <div>
            {
                owner ?
                    !edit ?
                        <>
                            <button className={"button-center-only"} onClick={e => setEdit(!edit)}>Add New Schedule</button>
                            {studioSchedule.map(schedule => <StudioClassSchedule schedule={schedule} owner={owner}/>)}
                        </>
                    :
                        <>
                            <StudioScheduleAddForm studioId={studioId} edit={edit} setEdit={setEdit}/>
                            {studioSchedule.map(schedule => <StudioClassSchedule schedule={schedule} owner={owner}/>)}
                        </>
                :
                studioSchedule.map(schedule => <StudioClassSchedule schedule={schedule} owner={owner}/>)
            }
            {
                studioSchedule.length === 0 && (
                    <h5>no events</h5>
                )
            }
        </div>
        </>
    )
}
