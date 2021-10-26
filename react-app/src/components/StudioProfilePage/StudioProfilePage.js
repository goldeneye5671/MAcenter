import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BasicStudioInfo from './BasicStudioInfo'
import Bio from './Bio'
import StudioEvents from './StudioEvents'
import StudioReviews from './StudioReviews'
import Map from './Map'
import { useParams } from 'react-router'
import { fetchOneStudioAction } from '../../store/StudioState'
import StudioClassSchedules from './StudioClassSchedules'
import StudioEventAddForm from './StudioEventAddForm'

export default function StudioProfilePage({owner}) {
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
            <BasicStudioInfo studio={studio}/>
            <div>
                <div>
                    <Bio studio={studio}/>
                    {
                        owner && (
                            edit ? (
                                <StudioEventAddForm edit={edit} setEdit={setEdit} studio_id={studio.id}/>
                                )
                                :
                                <button onClick={e => setEdit(!edit)}> Add Event </button>
                        )
                    }
                    <StudioEvents studio={studio} owner={owner}/>
                    <StudioReviews studio={studio}/>
                </div>
                <div>
                    <Map studio={studio} owner={owner}/>
                    <StudioClassSchedules studio={studio} />
                    {/* <Address /> */}
                </div>
            </div>
        </div>
    )
}
