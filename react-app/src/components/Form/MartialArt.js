import React from 'react'

export default function MartialArt({martialArt, setMartialArt, martialArts, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);
    
    return (
        <div>
            <label>Studio art</label>
            <select value={martialArt} onChange={e => setMartialArt(e.target.value)}>
                <option>Select Martial Art</option>
                {martialArts.map( art => (<option value={art.id}>{art.name}</option>)
                )}
            </select>

        </div>
    )
}
