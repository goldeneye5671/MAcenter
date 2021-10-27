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
        <div>
            {
                owner ? 
                    !edit ? 
                        (
                            <>
                                <h4>{schedule.schedule_name}</h4>
                                <ul>
                                    <li>Start Time: {schedule.start_time}</li>
                                    <li>End Time: {schedule.end_time}</li>
                                </ul>
                                <button onClick={e => setEdit(!edit)}>edit</button>
                                <button onClick={deleteHandler}>delete</button>
                            </>
                        )
                    :
                        (
                            <StudioScheduleEditForm studioSchedule={schedule} edit={edit} setEdit={setEdit}/>
                        )
                :
                    (
                        <>
                        <h4>{schedule.schedule_name}</h4>
                        <ul>
                            <li>Start Time: {schedule.start_time}</li>
                            <li>End Time: {schedule.end_time}</li>
                        </ul>
                        </>
                    )
            }


            
        </div>
    )
}
