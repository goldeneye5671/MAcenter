import React from 'react'

export default function BasicUserInfo({user}) {
    return (
        <div>
            <img></img>
            <div>
                <h1>{user?.first_name} {user?.last_name}</h1>
                <h4>{user?.martial_art?.name}</h4>
                <h4>Studios that I've studied at</h4>
                <ul>
                    {user?.studio_names?.map((studio_name) => <li>{studio_name.name}</li>)}
                </ul>
            </div>
            <div>
                <h3>{user?.ranks?.name}</h3>
                <p>{user?.ranks?.rank_number}</p>
            </div>
        </div>
    )
}
