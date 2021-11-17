import React from 'react'

export default function Rating({rating, setRating}) {
    
    const [errors, setErrors] = React.useState([]);
    
    return (
        <div>
            <label>rating</label>
            <div>
                <label>1</label><input onChange={e => setRating(1)} type="radio" value={1} checked={rating === 1}></input>
                <label>2</label><input onChange={e => setRating(2)} type="radio" value={2} checked={rating === 2}></input>
                <label>3</label><input onChange={e => setRating(3)} type="radio" value={3} checked={rating === 3}></input>
                <label>4</label><input onChange={e => setRating(4)} type="radio" value={4} checked={rating === 4}></input>
                <label>5</label><input onChange={e => setRating(5)} type="radio" value={5} checked={rating === 5}></input>
            </div>
        </div>
    )
}
