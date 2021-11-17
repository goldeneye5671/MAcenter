import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearStudioStateAction, fetchAllStudiosAction } from '../../store/StudioState';

export default function StudioContainer({activeArt}) {
    const activeMartialArtStudios = useSelector(state => Object.values(state.studios)?.filter(
        studio => {
            return studio.martial_art.id === activeArt
        }
    ))
    const [searchTerm, setSearchTerm] = React.useState("")
    const dispatch = useDispatch();
    React.useEffect(() => {
        // dispatch(clearStudioStateAction())
        dispatch(fetchAllStudiosAction());
        
    }, [activeArt, dispatch])

    return (
        <div className={"studio-list"}>
            <div>
                <label>Search Studios</label>
                <input 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            {
                searchTerm.length > 0 ? 
                    activeMartialArtStudios.filter(
                        studio => {
                            return studio.name.toLowerCase().includes(searchTerm.toLowerCase())
                        }
                    ).map(studio => {
                        return <Link className={"button button-fixed"} to={`/studios/${studio.id}`}>{studio.name}</Link>
                    })
                :
                    activeMartialArtStudios.map(studio => {
                        return <Link className={"button button-fixed"} to={`/studios/${studio.id}`}>{studio.name}</Link>
                    })
            }
        </div>
    )
}
