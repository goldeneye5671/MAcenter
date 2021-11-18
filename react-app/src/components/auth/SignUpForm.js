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
import MartialArt from '../Form/MartialArt';
import Rank from '../Form/Rank';
import Studio from '../Form/Studio';
import SignUpArtStudioSelector from '../Form/SignUpArtStudioSelector';



export default function SignUpForm() {
    const martialArts = useSelector(state => Object.values(state.martialArts));
    const studios = useSelector(state => Object.values(state.studios));

    const history = useHistory()

    const [loaded, setLoaded] = React.useState(false);
    const [errors, setErrors] = React.useState([]);
    const [submitClicked, setSubmitClicked] = React.useState(false);

    const [first_name, set_first_name] = React.useState('');
    const [last_name, set_last_name] = React.useState('');
    const [email, set_email] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [martial_art, set_martial_art] = React.useState("null");
    const [rank, set_rank] = React.useState("null");
    const [studio, set_studio] = React.useState("null");
    const [password, set_password] = React.useState('');
    const [verify_password, set_verify_password] = React.useState('');

    const [usernameValidated, setUsernameValidated] = React.useState(false);
    const [emailValidated, setEmailValidated] = React.useState(false);
    const [passwordValidated, setPasswordValidated] = React.useState(false);
    const [bioValidated, setBioValidated] = React.useState(false);
    const [artStudioSelector, setArtStudioSelector] = React.useState(false);

    const dispatch = useDispatch()

    async function submit(e) {
        e.preventDefault();
        setSubmitClicked(true);
        if (
            usernameValidated &&
            emailValidated &&
            passwordValidated &&
            bioValidated &&

            errors.length === 0
        ) {
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
                console.log(otherErrs)
              }
        } else {
            console.error("There is an error somewhere")
            console.log("username", usernameValidated);
            console.log("password", passwordValidated);
            console.log("email", emailValidated);
            console.log("bio", bioValidated)
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
                    
                    {
                        errors.length > 0 && submitClicked ? 
                        (
                            errors.map( error =>
                                <p>{error}</p>
                                )
                        )
                        :
                        null
                    }

                    <UserName 
                        firstName={first_name}
                        lastName={last_name}
                        setFirstName={set_first_name}
                        setLastName={set_last_name}
                        submitClicked={submitClicked}
                        setValidated={setUsernameValidated}
                    />
                    
                    <Password
                        single={false}
                        password={password}
                        verifyPassword={verify_password}
                        setPassword={set_password}
                        setVerifyPassword={set_verify_password}
                        submitClicked={submitClicked}
                        setValidated={setPasswordValidated}
                    />
                    
                    <Email 
                        email={email}
                        setEmail={set_email}
                        submitClicked={submitClicked}
                        setValidated={setEmailValidated}
                    />

                    <Bio
                        bio={bio}
                        setBio={setBio}
                        submitClicked={submitClicked} 
                        setValidated={setBioValidated}
                    />

                    <SignUpArtStudioSelector 
                        martialArts={martialArts}
                        studios={studios}
                        martialArt={martial_art}
                        studio={studio}
                        setMartialArt={set_martial_art}
                        setStudio={set_studio}
                        setRank={set_rank}
                        rank={rank}
                        submitClicked={submitClicked}
                        setValidated={setArtStudioSelector}
                    />

                    <button onClick={submit}>Sign Up</button>
                </form>
                </div>
        </div>
        
    )
}
