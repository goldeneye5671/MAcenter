import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchOneStudioAction } from '../store/StudioState'
import StudioProfilePage from './StudioProfilePage/StudioProfilePage'
import StudioUpdate from './StudioProfilePage/StudioUpdate'

export default function Studio() {
    const [loaded, setLoaded] = React.useState(false);
    const dispatch = useDispatch();
    const {studioId} = useParams();
    const studio = useSelector(state => state.studios[studioId]);
    const session = useSelector(state => state.session.user);
    React.useEffect(() => {
        if (!studioId) {
          setLoaded(true);
          return;
        }
        (async () => {
          await dispatch(fetchOneStudioAction(parseInt(studioId)));
          setLoaded(true)
        })();
      }, [studioId, loaded, dispatch]);

    return (
        <div>
            {
                studio ?
                    session && session.id === studio?.owner?.id ?
                            <StudioProfilePage owner={true} studio={studio}/>
                        :
                            <StudioProfilePage owner={false} studio={studio} />
                :
                (<h1>studio does not exist</h1>)
            }
        </div>        
    )
}
