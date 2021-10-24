import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { signUp } from '../../store/session';
import { fetchAllStudiosAction } from '../../store/StudioState';
import { updateUserAction } from '../../store/UserState';

export default function SignUpForm() {
    const [loaded, setLoaded] = React.useState(false)
    const [errors, setErrors] = React.useState([])
    const [first_name, set_first_name] = React.useState('');
    const [last_name, set_last_name] = React.useState('');
    const [email, set_email] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [martial_art, set_martial_art] = React.useState(1);
    const [rank, set_rank] = React.useState(1);
    const [studio, set_studio] = React.useState(1);
    const [password, set_password] = React.useState('');
    const [verify_password, set_verify_password] = React.useState('');

    const martialArts = useSelector(state => state.martialArts)
    const studios = useSelector(state => state.studios);

    const dispatch = useDispatch()

    async function submit(e) {
        e.preventDefault();
        const errors = [];
        if (!first_name) {errors.push("Please provide a value to the first name field")};
        if (!last_name) {errors.push("Please provide a value to the last name field")};
        if (!email) {errors.push("Please provide a value to the email field")};
        if (!martial_art) {errors.push("Please provide a value to the password field")};
        if (!rank) {errors.push("Please provide a value to the rank field")};
        if (!studio) {errors.push("Please provide a value to the studio field")};
        if (!bio) {errors.push("Please provide a value to the bio field")}
        if (!password) {errors.push("Please provide a value to the password field")};
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
                <Redirect to={"/"}/>
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
    }, [dispatch, errors])

    return (
        <form>
            <h1>sign up form</h1>
            {errors.length > 0 &&
                <>
                    <ul>
                        {errors.map((error, index) => <li key={index}>{error}</li>)}
                    </ul>
                </>
            }
            <label>First Name</label>
            <input value={first_name} onChange={e => set_first_name(e.target.value)}></input>

            <label>Last Name</label>
            <input value={last_name} onChange={e => set_last_name(e.target.value)}></input>

            <label>Email</label>
            <input type="email" value={email} onChange={e => set_email(e.target.value)}></input>

            <label>Password</label>
            <input type="password" value={password} onChange={e => set_password( password => password = e.target.value )} />

            <label>Verify Password </label>
            <input type="password" value={verify_password} onChange={e => set_verify_password( verify_password => verify_password = e.target.value)} />

            <label>Bio</label>
            <textarea value={bio} onChange={e => setBio(bio => e.target.value)} />

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
            <select value={studio}>
                {Object.values(studios).map(studio => (<option value={studio.id}>{studio.name}</option>))}
            </select>
            <button onClick={submit}>Sign Up!</button>
        </form>
    )
}
