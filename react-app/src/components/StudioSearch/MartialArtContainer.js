import React from 'react'

export default function MartialArtContainer({art, setActiveArt}) {
    return (
        <button onClick={e => setActiveArt(art.id)}>
            {art.name}
        </button>
    )
}
