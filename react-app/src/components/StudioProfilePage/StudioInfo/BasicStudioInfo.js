import React from 'react'

export default function BasicStudioInfo({studioSetEdit, studio}) {
    return (
        <div className={"studio-info"}>
            <h1>Studio Name: {studio?.name}</h1>
            <ul>
                <li>Owner: {studio?.owner?.first_name} {studio?.owner?.last_name}</li>
                <li>Martial Art: {studio?.martial_art?.name}</li>
            </ul>
            <button onClick={e => {e.preventDefault(); studioSetEdit(edit => !edit)}}> edit </button>

        </div>
    )
}
