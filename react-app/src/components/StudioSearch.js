import React from 'react'

import MartialArtProfilePage from './StudioSearch/MartialArtProfilePage';
import MartialArtsList from './StudioSearch/MartialArtsList';
import StudioContainer from './StudioSearch/StudioContainer';
// import StudioList from './StudioSearch/StudioList'

import { useDispatch } from 'react-redux'
import { fetchAllMartialArtsAction } from '../store/MartialArtState';

export default function StudioSearch() {
    const dispatch = useDispatch()

    const [activeArt, setActiveArt]= React.useState(1)
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        
        (async () => {
            dispatch(fetchAllMartialArtsAction())
            setLoaded(true)
        })()
    }, [dispatch, activeArt])

    return (
        <>
        {
            loaded && (
                <div className={"container"}>
                    <div className={"search-container"}>
                        <MartialArtsList activeArt={activeArt} setActiveArt={setActiveArt}/>
                        <MartialArtProfilePage activeArt={activeArt}/>
                        {/* <StudioList activeArt={activeArt}/> */}
                        <StudioContainer activeArt={activeArt} />
                    </div>
                </div>
            )
        }
        </>
    )
}
