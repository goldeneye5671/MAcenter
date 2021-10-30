import React from 'react'

export default function MartialArtContainer({art, activeArt, setActiveArt}) {
    return (
        <button className={ activeArt===art.id ? 'active-button-fixed' : "button-fixed"} onClick={e => setActiveArt(art.id)}>
            {art.name}
        </button>
    )
}
