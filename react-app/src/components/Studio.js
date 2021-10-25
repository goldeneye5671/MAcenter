import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BasicStudioInfo from './StudioProfilePage/BasicStudioInfo'
import Bio from './StudioProfilePage/Bio'
import StudioEvents from './StudioProfilePage/StudioEvents'
import StudioReviews from './StudioProfilePage/StudioReviews'
import Map from './StudioProfilePage/Map'
import { useParams } from 'react-router'
import { fetchOneStudioAction } from '../store/StudioState'

export default function Studio() {
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
                    <Map />
                    {/* <Address /> */}
                </div>
            </div>
        </div>
    )
}
