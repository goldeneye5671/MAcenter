import React from 'react'
import { useSelector } from 'react-redux'

export default function StudioContainer({activeArt}) {
    const activeMartialArtStudios = useSelector(state => state.martialArt[activeArt].studios)
    
    return (
        <div>
            {}
        </div>
    )
}
