import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BasicStudioInfo from './StudioInfo/BasicStudioInfo'
import Bio from './StudioInfo/Bio'
import StudioEvents from './EventComponents/StudioEvents'
import StudioReviews from './ReviewComponents/StudioReviews'
import Map from './StudioInfo/Map'
import { useParams } from 'react-router'
import { fetchOneStudioAction } from '../../store/StudioState'
import StudioClassSchedules from './ScheduleComponents/StudioClassSchedules'
import StudioEventAddForm from './EventComponents/StudioEventAddForm'

export default function StudioProfilePage({owner, studioSetEdit}) {
    const [loaded, setLoaded] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const {studioId} = useParams();
    const studio = useSelector(state => state.studios[studioId]);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchOneStudioAction(studioId))
    }, [edit, loaded]);

    return (
        <div>
            <BasicStudioInfo studioSetEdit={studioSetEdit} studio={studio}/>
            <div className={"profile-container"}>
                <div className={"main-info"}>
                    <Bio studio={studio}/>
                    {
                        owner && (
                            edit && (
                                <StudioEventAddForm edit={edit} setEdit={setEdit} studio_id={studio.id}/>
                                )
                        )
                    }
                    <StudioEvents owner={owner}/>
                    <StudioReviews studio={studio}/>
                </div>
                <div className={"other-info"}>
                    <Map studio={studio} owner={owner}/>
                    <StudioClassSchedules studio={studio} owner={owner} />
                    {/* <Address /> */}
                </div>
            </div>
        </div>
    )
}
