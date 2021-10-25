import React from 'react'

export default function Bio({studio}) {
    return (
        <div>
            <h4>About {studio?.name}</h4>
            <p>
                {studio?.studio_bio}
            </p>
        </div>
    )
}
