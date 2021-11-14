import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { createStudioAction } from '../../store/StudioState';
import Address from '../Form/Address';
import StudioName from '../Form/StudioName';
import Email from '../Form/Email'
import Bio from "../Form/Bio"


export default function StudioCreate() {
    const session = useSelector(state => state.session.user);
    const martialArts = useSelector(state => state.martialArts);
    const studios = useSelector(state => state.studios)
    const history = useHistory()

    const dispatch = useDispatch();

    const [loaded, setLoaded] = React.useState(false);
    const [errors, setErrors] = React.useState([]);
    const [submitClicked, setSubmitClicked] = React.useState(false);

    const [name, set_name] = React.useState('');
    const [federation_id, set_federation_id] = React.useState('');
    const [address, set_address] = React.useState('') ;
    const [phone_contact, set_phone_contact] = React.useState('');
    const [email_contact, set_email_contact] = React.useState('');
    const [studio_bio, set_studio_bio] = React.useState('');
    const [martial_art, set_martial_art] = React.useState();
    const [owner_id, set_owner_id] = React.useState(session.id);

    const [nameValidated, setNameValidated] = React.useState(false)
    const [emailValidated, setEmailValidated] = React.useState(false)
    const [addressValidated, setAddressValidated] = React.useState(false)
    const [phoneValidated, setPhoneValidated] = React.useState(false)
    const [martialArtValidated, setMartialArtValidated] = React.useState(false)
    const [bioValidated, setBioValidated] = React.useState(false)

    async function submit(e) {
        e.preventDefault();
        setSubmitClicked(true);
        const errors = [];
        console.log("Address validated status: ", addressValidated)
        // if (!name) {errors.push("Please provide a value to the Name field")};
        // if (name.length > 256) {errors.push("Name of studio is too long")}
        // if (!federation_id) {errors.push("Please provide a value to the federation id field")};
        // if (federation_id.length > 25) {errors.push("Federation id is too long")}
        
        // if (!martial_art) {errors.push("Please provide a value to the martial art field")};
        // if (!phone_contact) {errors.push("Please provide a value to the studio phone field")};
        // if (phone_contact.length > 14) {errors.push("Phone number is too long")}
        // if (!owner_id) {errors.push("In order to add a studio you must be logged in. Please log in")}
        
        if (!nameValidated || !emailValidated || !addressValidated || !phoneValidated || !martialArtValidated || !bioValidated) {
            setErrors(errors);
            console.log("Inside the check")
        } else {
            console.log("Inside the otehr check")
            const newStudio = {
                name,
                federation_id,
                address,
                phone_contact,
                email_contact,
                studio_bio,
                martial_art_id: martial_art,
                owner_id
            }
            const studioInfo = await dispatch(createStudioAction(newStudio));
            history.push(`/studios/${studioInfo.studio.id}`)
            // setEdit(edit => !edit);
        }
    }

    React.useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction());
            setLoaded(true);
        })()
    }, [loaded, dispatch, errors])
    
    return (
        <div className={"container"}>
            <div className={'form-container'}>
            <form className={"form"}>
            <h1 className={'form-header'}>Create Studio</h1>
            {/* {
                errors.length > 0 && 
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            } */}


            <StudioName 
               studioName={name}
               setStudioName={set_name} 
               federationId={federation_id}
               setFederationId={set_federation_id}
               submitClicked={submitClicked}
               setValidated={setNameValidated}
            />

            <Email
                email={email_contact}
                setEmail={set_email_contact}
                submitClicked={submitClicked}
                setValidated={setEmailValidated}
            />


            <Address
                address={address}
                setAddress={set_address}
                setValidated={setAddressValidated}
                submitClicked={submitClicked}
            />

            {/*

            <label>Studio contact phone</label>
            <input className={"form-field"} placeholder={"studio contact phone number"} value={phone_contact} onChange={e => set_phone_contact(e.target.value)} />

            <Bio
                bio={studio_bio}
                setBio={set_studio_bio}
                submitClicked={submitClicked}
            />

            <label>Studio art</label>
            <select value={martial_art} onChange={e => set_martial_art(e.target.value)}>
                <option>Select Martial Art</option>
                {Object.values(martialArts).map( art => (<option value={art.id}>{art.name}</option>)
                )}
            </select>

            <label></label>
            */}
            <button onClick={submit}>Create Studio</button>

        </form>
        </div>
        </div>        
    )
}
