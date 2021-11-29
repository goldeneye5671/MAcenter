import React from 'react'
import  ReactDOM  from 'react-dom';

import { useDispatch } from 'react-redux';
import { followUserMartialArtAction } from '../../store/UserState';

export default function MartialArtForm({user, martialArt, setIsEdit}) {
    
    const dispatch = useDispatch()

    const [errors, setErrors] = React.useState([]);
    const [validated, setValidated] = React.useState(false);
    const [submitClicked, setSubmitClicked] = React.useState(false);
    const [rank, setRank] = React.useState("null");

    function submit (e) {
        e.preventDefault()
        setSubmitClicked(true);
        if (validated) {
            //will change the rank to whatever the rank is
            const followingInfo = {
                ma_ranks: rank,
                maid: martialArt.id
            }
            dispatch(followUserMartialArtAction(followingInfo, user.id))
            setIsEdit(false);
        }
    }
    
    React.useEffect(
        () => {
            const myErrors = []
            if (rank === "null") {
                myErrors.push("Please select a rank")
            }

            if (myErrors.length > 0) {
                setErrors(myErrors);
                setValidated(false);
            } else {
                setErrors([]);
                setValidated(true);
            }
        },
        [
            rank,
            submitClicked
        ]
    )

    return ReactDOM.createPortal(
        <>
        <div className={"overlay-styles"}></div>    
        <div className={"modal-styles form-container"}>
            <form className={"form"}>
                <label>What rank are you in {martialArt?.name}</label>
                <select value={rank} onChange={e => setRank(e.target.value)}>
                    <option value={"null"}>Please select a rank</option>
                    {
                        Object.values(martialArt.ranks).map(
                            rank =>(
                            <option value={rank.id} onChange={e => setRank(e.target.value)}>
                                {rank.name}
                            </option>
                            )
                        )
                    }
                </select>
                {
                    submitClicked && errors.map( error => <p>{error}</p>)
                }
                <button onClick={e => submit(e)}>Submit</button>
                <button onClick={e => setIsEdit(false)}>Cancel</button>
            </form>
        </div>
        </>,
        document.getElementById("portal")       
    )
}
