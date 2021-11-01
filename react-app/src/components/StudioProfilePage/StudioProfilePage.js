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
    const [visibleThing, setVisibleThing] = React.useState(1)
    const {studioId} = useParams();
    const studio = useSelector(state => state.studios[studioId]);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchOneStudioAction(studioId))
    }, [loaded, dispatch, studioId]);

    return (
        <div>
            <BasicStudioInfo owner={owner} studio={studio}/>
            <div className={"visible-info-buttons"}>
                    <button className={visibleThing===1 ? 'active-button' : "button"} onClick={e => {setVisibleThing(1)}}>About</button>
                    <button className={visibleThing===2 ? 'active-button' : "button"} onClick={e => {setVisibleThing(2)}}>Events</button>
                    <button className={visibleThing===3 ? 'active-button' : "button"} onClick={e => {setVisibleThing(3)}}>Reviews</button>
            </div>
            <div className={"profile-container"}>
                <div className={"main-info"}>
                    {visibleThing === 1 ? <Bio studio={studio}/> : null}
                    {visibleThing === 2 ? <StudioEvents owner={owner}/>: null}
                    {visibleThing === 3 ? <StudioReviews studio={studio}/>: null}
                </div>
                <div className={"other-info-container"}>
                    <div className={"headers"}>
                        <h4>Other information</h4>
                    </div>
                    <div className={"other-info"}>
                        <Map studio={studio} owner={owner}/>
                        <StudioClassSchedules studio={studio} owner={owner} />
                    </div>
                    {/* <Address /> */}
                </div>
            </div>
        </div>
    )
}
