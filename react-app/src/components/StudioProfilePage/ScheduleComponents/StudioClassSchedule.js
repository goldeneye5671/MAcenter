import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeStudioScheduleAction } from '../../../store/StudioState';
import StudioScheduleAddForm from './StudioScheduleAddForm';
import StudioScheduleEditForm from './StudioScheduleEditForm';

export default function StudioClassSchedule({schedule, owner}) {
    const [edit, setEdit] = React.useState(false);

    const user = useSelector(state => sessionStorage.user);
    
    const dispatch = useDispatch()

    function deleteHandler (e) {
        e.preventDefault();
        dispatch(removeStudioScheduleAction(schedule))
    }

    return (
        <div className={"studio-schedule-container"}>
            {
                owner ? 
                    !edit ? 
                        (
                            <div className={"studio-schedule-content"}>
                                <h4>{schedule.schedule_name}</h4>
                                <div>
                                    <p>from {schedule.start_time} to {schedule.end_time}</p>
                                </div>
                                <div className={"edit-and-delete-button-container"}>
                                    <button onClick={e => setEdit(!edit)}>edit</button>
                                    <button onClick={deleteHandler}>delete</button>
                                </div>
                            </div>
                        )
                    :
                        (
                            <StudioScheduleEditForm studioSchedule={schedule} edit={edit} setEdit={setEdit}/>
                        )
                :
                    (
                        <div className={"studio-schedule-content"}>
                        <h4>{schedule.schedule_name}</h4>
                        <div>
                            <p>from {schedule.start_time} to {schedule.end_time}</p>
                        </div>
                        </div>
                    )
            }


            
        </div>
    )
}
