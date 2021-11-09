import React, {useEffect} from 'react'
import {Redirect, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { signUp } from '../../store/session';
import { fetchAllStudiosAction } from '../../store/StudioState';
import { updateUserAction } from '../../store/UserState';
import UserName from '../Form/UserName';
import Password from '../Form/Password';
import Email from '../Form/Email';
import Bio from '../Form/Bio';



export default function SignUpForm() {
    const martialArts = useSelector(state => state.martialArts)
    const studios = useSelector(state => state.studios);

    const history = useHistory()

    const [loaded, setLoaded] = React.useState(false);
    const [errors, setErrors] = React.useState([]);
    const [submitClicked, setSubmitClicked] = React.useState(false);
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
        setSubmitClicked(true);
        const errors = [];
        if (!email) {errors.push("Please provide a value to the email field")};
        if (email.length > 255) {errors.push("email is too long")}
        if (!martial_art) {errors.push("Please provide a value to the password field")};
        if (!rank) {errors.push("Please provide a value to the rank field")};
        if (!bio) {errors.push("Please provide a value to the bio field")}
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
                    
                    <UserName 
                        firstName={first_name}
                        lastName={last_name}
                        setFirstName={set_first_name}
                        setLastName={set_last_name}
                        submitClicked={submitClicked}
                    />
                    
                    <Password
                        single={false}
                        password={password}
                        verifyPassword={verify_password}
                        setPassword={set_password}
                        setVerifyPassword={set_verify_password}
                        submitClicked={submitClicked}
                    />
                    
                    <Email 
                        email={email}
                        setEmail={set_email}
                        submitClicked={submitClicked}
                    />

                    <Bio
                        bio={bio}
                        setBio={setBio}
                        submitClicked={submitClicked} 
                    />

                    <div className={"fields-container"}>
                        <div className={"field-container"}>
                        <label>Martial Art</label>
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
