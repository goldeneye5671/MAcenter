import React, {useEffect} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { signUp } from '../../store/session';
import { fetchAllStudiosAction } from '../../store/StudioState';
import { updateUserAction } from '../../store/UserState';



export default function SignUpForm() {
    const martialArts = useSelector(state => state.martialArts)
    const studios = useSelector(state => state.studios);

    const history = useHistory()

    const [loaded, setLoaded] = React.useState(false)
    const [errors, setErrors] = React.useState([])
    const [first_name, set_first_name] = React.useState('');
    const [last_name, set_last_name] = React.useState('');
    const [email, set_email] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [martial_art, set_martial_art] = React.useState();
    const [rank, set_rank] = React.useState();
    const [studio, set_studio] = React.useState();
    const [password, set_password] = React.useState('');
    const [verify_password, set_verify_password] = React.useState('');

    const dispatch = useDispatch()

    async function submit(e) {
        e.preventDefault();
        const errors = [];
        if (!first_name) {errors.push("Please provide a value to the first name field")};
        if (first_name.length > 50) {errors.push("First Name is TOO long")}
        if (!last_name) {errors.push("Please provide a value to the last name field")};
        if (last_name.length > 50) {errors.push("Last name is too long")}
        if (!email) {errors.push("Please provide a value to the email field")};
        if (email.length > 255) {errors.push("email is too long")}
        if (!martial_art) {errors.push("Please provide a value to the password field")};
        if (!rank) {errors.push("Please provide a value to the rank field")};
        if (!bio) {errors.push("Please provide a value to the bio field")}
        if (!password) {errors.push("Please provide a value to the password field")};
        if (password.length > 255)
        if (!verify_password) {errors.push("Please provide a value to the verify password field")};
        if (password !== verify_password) {errors.push("Passwords do not match")}
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            const newUser = {
                first_name,
                last_name,
                email,
                bio,
                martial_art_id: martial_art,
                rank_id: rank,
                studio_id: studio,
                password
              }
              // dispatch(updateUserAction(user.id, updatedUserInfo))
              const otherErrs = await dispatch(signUp(newUser))
              if (!otherErrs) {
                history.push('/')
              } else {
                setErrors(otherErrs);
              }
        }
    }

    useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction());
            dispatch(fetchAllStudiosAction())
            setLoaded(true);

        })()
    }, [dispatch, errors, loaded])

    return (
        <div className="container">
<div className={"form-container"}>
            <form className={"form"}>
            <h1 className={"form-header"}>sign up form</h1>
            {errors.length > 0 &&
                <>
                    <ul>
                        {errors.map((error, index) => <li key={index}>{error}</li>)}
                    </ul>
                </>
            }
            <div className={"fields-container"}>
                <div className={"field-container"}>
                    <label>First Name</label>
                    <input placeholder={"First Name"} className={"form-field"} value={first_name} onChange={e => set_first_name(e.target.value)}></input>
                </div>

                <div placeholder={"Last Name"} className={"field-container"}>
                <label>Last Name</label>
                    <input placeholder={"Last Name"} className={"form-field"} value={last_name} onChange={e => set_last_name(e.target.value)}></input>
                </div>
            </div>

            <div className={"fields-container"}>
                <div className={"field-container"}>
                <label>Password</label>
                    <input placeholder={"Password"} className={"form-field"} type="password" value={password} onChange={e => set_password( password => password = e.target.value )} />
                </div>
                <div className={"field-container"}>
                <label>Verify Password</label>
                    <input placeholder={"Verify Password"} className={"form-field"} type="password" value={verify_password} onChange={e => set_verify_password( verify_password => verify_password = e.target.value)} />
                </div>

            </div>
            <label>Email</label>
            <input placeholder={"Email"} className={"form-field"} type="email" value={email} onChange={e => set_email(e.target.value)}></input>
            <label></label>
            <textarea placeholder={"Tell us about yourself!"}className={"form-field"} value={bio} onChange={e => setBio(bio => e.target.value)} />

            <div className={"fields-container"}>
                <div className={"field-container"}>
                <label>Bio</label>
                    <select value={martial_art} onChange={e => set_martial_art(e.target.value)}>
                        <option>Select Martial Art</option>
                        {Object.values(martialArts).map( art => (<option value={art.id}>{art.name}</option>)
                        )}
                    </select>
                </div>
                <div className={"field-container"}>
                <label>Rank</label>
                    <select value={rank} onChange={e => set_rank(e.target.value)}>
                    <option>Select Rank</option>
                        {martialArts[martial_art]?.ranks?.map(rank => (<option value={rank.id}>{rank.name} Rank number {rank.number}</option>))}
                    </select>
                </div>
            </div>

            <label>Studio</label>
            <select value={studio} onChange={e => set_studio(e.target.value)}>
                <option>Select Studio</option>
                {Object.values(studios).map(studio => (<option value={studio.id}>{studio.name}</option>))}
            </select>
            <button onClick={submit}>Sign Up</button>
        </form>
        </div>
        </div>
        
    )
}
