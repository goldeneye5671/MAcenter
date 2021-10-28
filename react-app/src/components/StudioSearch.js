import React from 'react'

import MartialArtProfilePage from './StudioSearch/MartialArtProfilePage';
import MartialArtsList from './StudioSearch/MartialArtsList';
import StudioList from './StudioSearch/StudioList'

export default function StudioSearch() {
    const [activeArt, setActiveArt]= React.useState(0)

    return (
        <div>
            <MartialArtsList activeArt={activeArt} setActiveArt={setActiveArt}/>
            <MartialArtProfilePage activeArt={activeArt}/>
            <StudioList activeArt={activeArt}/>
        </div>
    )
}
