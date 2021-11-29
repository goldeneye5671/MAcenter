import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { updateStudioAction } from '../../store/StudioState';
import  ReactDOM  from 'react-dom';

import Address from '../Form/Address';
import StudioName from '../Form/StudioName';
import Email from '../Form/Email'
import Bio from "../Form/Bio"
import Phone from '../Form/Phone';
import MartialArt from '../Form/MartialArt';

export default function StudioUpdate({studio, edit, setEdit}) {
    const session = useSelector(state => state.session.user);
    const martialArts = useSelector(state => Object.values(state.martialArts));
    
    const dispatch = useDispatch();

    const [loaded, setLoaded] = React.useState(false);
    const [errors, setErrors] = React.useState([]);
    const [submitClicked, setSubmitClicked] = React.useState(false);

    const [name, set_name] = React.useState(studio.name);
    const [federation_id, set_federation_id] = React.useState(studio.federation_id);
    const [address, set_address] = React.useState(studio.address) ;
    const [phone_contact, set_phone_contact] = React.useState(studio.phone_contact);
    const [email_contact, set_email_contact] = React.useState(studio.email_contact);
    const [studio_bio, set_studio_bio] = React.useState(studio.studio_bio);
    const [martial_art, set_martial_art] = React.useState(studio.martial_art.id);
    const [owner_id, set_owner_id] = React.useState(session.id);

    const [nameValidated, setNameValidated] = React.useState(false)
    const [emailValidated, setEmailValidated] = React.useState(false)
    const [addressValidated, setAddressValidated] = React.useState(false)
    const [phoneValidated, setPhoneValidated] = React.useState(false)
    const [martialArtValidated, setMartialArtValidated] = React.useState(false)
    const [bioValidated, setBioValidated] = React.useState(false)

    function submit(e) {
        e.preventDefault();
        setSubmitClicked(true);
        if (nameValidated && emailValidated && addressValidated && phoneValidated && martialArtValidated && bioValidated) {
            const updatedStudio = {
                name,
                federation_id,
                address,
                phone_contact,
                email_contact,
                studio_bio,
                martial_art_id: martial_art,
                owner_id
            }
            dispatch(updateStudioAction(studio.id, updatedStudio));
            // dispatch(createStudioAction(newStudio));
            setEdit(edit => !edit);
        }
    }

    React.useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction());
            setLoaded(true);
        })()
    }, [loaded, dispatch])
    
        return ReactDOM.createPortal(
            <>
        <div className={"overlay-styles"}></div>    
        <div className="modal-styles form-container">
            <form className={"form"}>
            <h1 className={'form-header'}>Update Studio</h1>
           
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

            <Phone
                phone={phone_contact}
                setPhone={set_phone_contact}
                submitClicked={submitClicked}
                setValidated={setPhoneValidated}
            />

            <Address
                address={address}
                setAddress={set_address}
                setValidated={setAddressValidated}
                submitClicked={submitClicked}
            />

            <Bio
                bio={studio_bio}
                setBio={set_studio_bio}
                submitClicked={submitClicked}
                setValidated={setBioValidated}
            />

            <MartialArt
                martialArt={martial_art}
                setMartialArt={set_martial_art}
                martialArts={martialArts}
                setValidated={setMartialArtValidated}
                submitClicked={submitClicked}
            />

            <button onClick={submit}>Update Studio</button>
            <button onClick={e => {e.preventDefault(); setEdit(!edit)}}>Cancel</button>

        </form>
        </div>
        </> ,
        document.getElementById("portal")       
    )
}
