import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { fetchAllStudiosAction } from '../../store/StudioState';
import { updateUserAction } from '../../store/UserState';
import ReactDOM from "react-dom"

import UserName from '../Form/UserName';
import Email from '../Form/Email';
import Bio from '../Form/Bio';
import SignUpArtStudioSelector from '../Form/SignUpArtStudioSelector';


export default function EditUserProfilePage({edit, setEdit}) {
    const {userId} = useParams()

    const user = useSelector(state => state.users[parseInt(userId)])
    const [loaded, setLoaded] = React.useState(false)
    const [errors, setErrors] = React.useState([])
    const [submitClicked, setSubmitClicked] = React.useState(false)
    
    const [first_name, set_first_name] = React.useState(user?.first_name);
    const [last_name, set_last_name] = React.useState(user?.last_name);
    const [email, set_email] = React.useState(user?.email);
    const [bio, setBio] = React.useState(user?.bio);
   
    const [usernameValidated, setUsernameValidated] = React.useState(false)
    const [emailValidated, setEmailValidated] = React.useState(false)
    const [bioValidated, setBioValidated] = React.useState(false)
   

    const martialArts = useSelector(state => Object.values(state.martialArts))
    const studios = useSelector(state => Object.values(state.studios));


    const dispatch = useDispatch()

    function submit(e) {
        e.preventDefault();
        setSubmitClicked(true);
        if (usernameValidated && emailValidated && bioValidated) {
            const updatedUserInfo = {
                first_name,
                last_name,
                email,
                bio
            }
            dispatch(updateUserAction(userId, updatedUserInfo))
            setEdit(!edit);
        }
    }

    React.useEffect(() => {
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
                <UserName 
                    firstName={first_name}
                    lastName={last_name}
                    setFirstName={set_first_name}
                    setLastName={set_last_name}
                    submitClicked={submitClicked}
                    setValidated={setUsernameValidated}
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

                <button onClick={submit}>Update</button> 
                <button onClick={e => setEdit(!edit)}>Cancel</button>
            </form>
        </div>
        </>,
        document.getElementById("portal")
    )
}
