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

export default function StudioProfilePage({owner}) {
    const [loaded, setLoaded] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const dispatch = useDispatch();
    const {studioId} = useParams()
    const studios = useSelector(state => state.studios)
    React.useEffect(() => {
        if (!studioId) {
          setLoaded(true);
          return;
        }
        (async () => {
          dispatch(fetchOneStudioAction(parseInt(studioId)));
          setLoaded(true)
        })();
      }, [studioId, loaded, edit, dispatch]);

    return (
        <div>
            <BasicStudioInfo studio={studios[studioId]}/>
            <div>
                <div>
                    <Bio studio={studios[studioId]}/>
                    <StudioEvents studio={studios[studioId]}/>
                    <StudioReviews studio={studios[studioId]}/>
                </div>
                <div>
                    <Map studio={studios[studioId]}/>
                    <StudioClassSchedules studio={studios[studioId]} />
                    {/* <Address /> */}
                </div>
            </div>
        </div>
    )
}
