import React from 'react'

import MartialArtContainer from './MartialArtContainer';

import { useSelector, useDispatch } from 'react-redux'
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';

export default function MartialArtsList({activeArt, setActiveArt}) {
    const dispatch = useDispatch();

    const allMartialArts = useSelector(state => Object.values(state?.martialArts))

    React.useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction())
        })()
    }, [dispatch])

    return (
        <div className={"martial-arts-list"}>
            {
                allMartialArts?.map(art => {
                    return <MartialArtContainer art={art} setActiveArt={setActiveArt} />
                })
            }
        </div>
    )
}
