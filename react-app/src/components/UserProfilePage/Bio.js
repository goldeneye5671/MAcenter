import React from 'react'

export default function Bio({user}) {
    return (
        <div>
            <h2>About me</h2>
            <p>{user?.bio}</p>
        </div>
    )
}
