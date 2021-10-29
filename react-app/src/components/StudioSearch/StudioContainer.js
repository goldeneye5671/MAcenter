import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearStudioStateAction, fetchAllStudiosAction } from '../../store/StudioState';

export default function StudioContainer({activeArt}) {
    const activeMartialArtStudios = useSelector(state => Object.values(state.studios))
    const dispatch = useDispatch();
    React.useEffect(() => {
        // dispatch(clearStudioStateAction())
        dispatch(fetchAllStudiosAction());
        
    }, [activeArt, dispatch])

    return (
        <div className={"studio-list"}>
            {
                activeMartialArtStudios.filter(
                    studio => {
                        return studio.martial_art.id === activeArt
                    }
                ).map(studio => {
                    return <Link to={`/studios/${studio.id}`}><h1>{studio.name}</h1></Link>
                })
            }
        </div>
    )
}
