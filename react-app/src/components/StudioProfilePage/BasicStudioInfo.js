import React from 'react'

export default function BasicStudioInfo({studio}) {
    return (
        <div>
            <h1>Studio Name: {studio?.name}</h1>
            <ul>
                <li>Owner: {studio?.owner?.first_name} {studio?.owner?.last_name}</li>
                <li>Martial Art: {studio?.martial_art?.name}</li>
            </ul>
        </div>
    )
}
