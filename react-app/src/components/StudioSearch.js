import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchAllMartialArtsAction } from '../store/MartialArtState';
import MartialArtProfilePage from './StudioSearch/MartialArtProfilePage';
import MartialArtsList from './StudioSearch/MartialArtsList';

export default function StudioSearch() {
    const allMartialArts = useSelector(state => Object.values(state.martialArts))
    const dispatch = useDispatch();

    const [activeArt, setActiveArt]= React.useState(0)

    React.useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction())
        })()
    }, [dispatch])

    return (
        <div>
            <MartialArtsList activeArt={activeArt} setActiveArt={setActiveArt}/>
            <MartialArtProfilePage activeArt={activeArt}/>
            <StudioList activeArt={activeArt}/>
        </div>
    )
}
