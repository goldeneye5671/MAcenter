import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { fetchAllStudiosAction } from '../../store/StudioState';
import { updateUserAction } from '../../store/UserState';
import ReactDOM from "react-dom"

export default function EditUserProfilePage({edit, setEdit}) {
    const {userId} = useParams()

    const user = useSelector(state => state.users[parseInt(userId)])
    const [loaded, setLoaded] = React.useState(false)
    const [errors, setErrors] = React.useState([])
    const [first_name, set_first_name] = React.useState(user?.first_name);
    const [last_name, set_last_name] = React.useState(user?.last_name);
    const [email, set_email] = React.useState(user?.email);
    const [bio, setBio] = React.useState(user?.bio);
    const [martial_art, set_martial_art] = React.useState(user?.martial_art?.id);
    const [rank, set_rank] = React.useState(user?.ranks?.id);
    const [studio, set_studio] = React.useState(parseInt(Object.keys(user?.studio_names)[0]));

    const martialArts = useSelector(state => state.martialArts)
    const studios = useSelector(state => state.studios);


    const dispatch = useDispatch()

    function submit(e) {
        e.preventDefault();
        console.log("clicked")
        const errors = [];
        if (!first_name) {errors.push("Please provide a value to the first name field")};
        if (!last_name) {errors.push("Please provide a value to the last name field")};
        if (!email) {errors.push("Please provide a value to the email field")};
        if (!martial_art) {errors.push("Please provide a value to the password field")};
        if (!rank) {errors.push("Please provide a value to the rank field")};
        if (!studio) {errors.push("Please provide a value to the studio field")};
        if (!bio) {errors.push("Please provide a value to the bio field")}
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            console.log(bio)
            const updatedUserInfo = {
                first_name,
                last_name,
                email,
                bio,
                martial_art_id: martial_art,
                rank_id: rank,
                studio_id: parseInt(studio)
            }
            console.log(updatedUserInfo)
            dispatch(updateUserAction(userId, updatedUserInfo))
            setEdit(!edit);
        }
    }

    useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction());
            dispatch(fetchAllStudiosAction());
            setLoaded(true);
        })()
    }, [loaded, dispatch, edit, errors])

    return ReactDOM.createPortal(
        <>
        <div className={"overlay-styles"}></div>
        <div className={"modal-styles form-container"}>
            <form className={"form"}>
                <h1>Edit User Profile</h1>
                {errors.length > 0 &&
                    <>
                        <ul>
                            {errors.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                    </>
                }
                <label>First Name</label>
                <input className={"form-field"} value={first_name} onChange={e => set_first_name(e.target.value)}></input>

                <label>Last Name</label>
                <input className={"form-field"} value={last_name} onChange={e => set_last_name(e.target.value)}></input>

                <label>Email</label>
                <input className={"form-field"} type="email" value={email} onChange={e => set_email(e.target.value)}></input>

                <label>Bio</label>
                <textarea className={"form-field"} value={bio} onChange={e => setBio(bio => e.target.value)} />

                <label>Martial Art</label>
                <select value={martial_art} onChange={e => set_martial_art(e.target.value)}>
                    {Object.values(martialArts).map( art => (<option value={art.id}>{art.name}</option>)
                    )}
                </select>

                <label>Rank</label>
                <select value={rank} onChange={e => set_rank(e.target.value)}>
                    {martialArts[martial_art]?.ranks?.map(rank => (<option value={rank.id}>{rank.name} Rank number {rank.number}</option>))}
                </select>

                <label>Studio</label>
                <select value={studio} onChange={e => set_studio(e.target.value)}>
                    {Object.values(studios).map(studio => (<option value={studio.id}>{studio.name}</option>))}
                </select>
                <div className={"edit-and-delete-button-container"}>
                    <button onClick={submit}>Save Changes</button>
                    <button onClick={e => setEdit(!edit)}> Cancel </button>
                </div>
            </form>
        </div>
        </>,
        document.getElementById("portal")
    )
}
