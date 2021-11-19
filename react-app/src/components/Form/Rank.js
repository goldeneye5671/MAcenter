import React from 'react'

export default function Rank({martialArts, martialArt, rank, setRank, submitClicked, setValidated}) {
    
    const [errors, setErrors] = React.useState([]);
    
    React.useEffect(
        () => {
            const myErrors = [];
            if (rank === "null") {
                myErrors.push("Please select a rank")   
            }
            if (myErrors.length > 0) {
                setErrors(myErrors);
                setValidated(false);
            } else {
                setErrors([])
                setValidated(true)
            }
        },
        [
            martialArt,
            martialArts,
            rank,
            setRank,
            submitClicked,
            setValidated
        ]
    )

    return (
        <div>
            <label>Rank</label>
            <select value={rank} onChange={e => setRank(e.target.value)}>
            <option value={"null"}>Select Rank</option>
                {
                    martialArts[martialArt - 1]?.ranks?.map(
                        rank => {
                            return <option value={rank.id}>{rank.name} Rank number {rank.number}</option>
                        }
                    )
                }
            </select>
            {
                (errors.length > 0 && submitClicked) && 
                errors.map(
                    error => {
                        return <p>{error}</p>
                    }
                )
            }
        </div>
    )
}
