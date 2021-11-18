import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { createStudioAction } from '../../store/StudioState';
import Address from '../Form/Address';
import StudioName from '../Form/StudioName';
import Email from '../Form/Email'
import Bio from "../Form/Bio"
import Phone from '../Form/Phone';
import MartialArt from '../Form/MartialArt';


export default function StudioCreate() {
    const session = useSelector(state => state.session.user);
    const martialArts = useSelector(state => Object.values(state.martialArts));
    const studios = useSelector(state => state.studios)
    const history = useHistory()

    const dispatch = useDispatch();

    const [loaded, setLoaded] = React.useState(false);
    const [submitClicked, setSubmitClicked] = React.useState(false);

    const [name, set_name] = React.useState('');
    const [federation_id, set_federation_id] = React.useState('');
    const [address, set_address] = React.useState('') ;
    const [phone_contact, set_phone_contact] = React.useState('');
    const [email_contact, set_email_contact] = React.useState('');
    const [studio_bio, set_studio_bio] = React.useState('');
    const [martial_art, set_martial_art] = React.useState("0");
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

        if (nameValidated && emailValidated && addressValidated && phoneValidated && martialArtValidated && bioValidated) {
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
        } else {
            console.error("Not all validators were flipped.", nameValidated, emailValidated, phoneValidated, martialArtValidated, bioValidated)
        }
    }

    React.useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction());
            setLoaded(true);
        })()
    }, [loaded, dispatch])
    
    return (
        <div className={"container"}>
            <div className={'form-container'}>
            <form className={"form"}>
            <h1 className={'form-header'}>Create Studio</h1>

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
            />

            <button onClick={submit}>Create Studio</button>

        </form>
        </div>
        </div>        
    )
}
