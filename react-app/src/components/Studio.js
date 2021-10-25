import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { fetchOneStudioAction } from '../store/StudioState'
import StudioProfilePage from './StudioProfilePage/StudioProfilePage'
import StudioUpdate from './StudioProfilePage/StudioUpdate'

export default function Studio() {
    const [loaded, setLoaded] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const dispatch = useDispatch();
    const {studioId} = useParams();
    const studios = useSelector(state => state.studios);
    const session = useSelector(state => state.session.user);
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
        <>
            {
                studios[studioId] ?
                    session && session.id === studios[studioId]?.owner?.id ?
                        !edit ? 
                        (
                            <>
                                <button onClick={e => setEdit(!edit)}> edit </button>
                                <StudioProfilePage owner={true}/>
                            </>
                        )
                        :
                        (
                        <>
                            <button onClick={e => setEdit(!edit)}>cancel</button>
                            <StudioUpdate studio={studios[studioId]} setEdit={setEdit}/>
                        </>
                        )
                    :
                    (
                        <>
                            <h1>A studio</h1>
                            <StudioProfilePage owner={false} />
                        </>
                    )
                :
                (<h1>studio does not exist</h1>)
            }
        </>        
    )
}
