import React from 'react'

import MartialArtContainer from './MartialArtContainer';

import { useSelector, useDispatch } from 'react-redux'
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';

export default function MartialArtsList({activeArt, setActiveArt}) {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = React.useState("")

    const allMartialArts = useSelector(state => Object.values(state?.martialArts))

    React.useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction())
        })()
    }, [dispatch])

    return (
        <div className={"martial-arts-list"}>
            <div>
                <label>Search Martial Arts</label>
                <input 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            {
                searchTerm.length > 0 ? 
                    allMartialArts?.filter(art => {
                        return art.name.toLowerCase().includes(searchTerm.toLowerCase())
                    }).map(art => {
                        return <MartialArtContainer art={art} activeArt={activeArt} setActiveArt={setActiveArt} />
                    })
                :
                    allMartialArts?.map(art => {
                        return <MartialArtContainer art={art} activeArt={activeArt} setActiveArt={setActiveArt} />
                    })
            }
        </div>
    )
}
