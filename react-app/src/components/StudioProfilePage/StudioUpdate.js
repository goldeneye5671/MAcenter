import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { updateStudioAction } from '../../store/StudioState';
import  ReactDOM  from 'react-dom';

export default function StudioUpdate({studio, edit, setEdit}) {
    const session = useSelector(state => state.session.user);
    const martialArts = useSelector(state => state.martialArts);
    
    const dispatch = useDispatch();

    const [loaded, setLoaded] = React.useState(false);
    const [errors, setErrors] = React.useState([]);

    const [name, set_name] = React.useState(studio.name);
    const [federation_id, set_federation_id] = React.useState(studio.federation_id);
    const [address, set_address] = React.useState(studio.address) ;
    const [phone_contact, set_phone_contact] = React.useState(studio.phone_contact);
    const [email_contact, set_email_contact] = React.useState(studio.email_contact);
    const [studio_bio, set_studio_bio] = React.useState(studio.studio_bio);
    const [martial_art, set_martial_art] = React.useState(studio.martial_art.id);
    const [owner_id, set_owner_id] = React.useState(session.id);

    function submit(e) {
        e.preventDefault();
        const errors = [];
        if (!name) {errors.push("Please provide a value to the Name field")};
        if (!federation_id) {errors.push("Please provide a value to the federation id field")};
        if (!address) {errors.push("Please provide a value to the address field")};
        if (!martial_art) {errors.push("Please provide a value to the martial art field")};
        if (!phone_contact) {errors.push("Please provide a value to the studio phone field")};
        if (!studio_bio) {errors.push("Please provide a value to the studio bio field")};
        if (!owner_id) {errors.push("In order to add a studio you must be logged in. Please log in")}
        if (errors.length > 0) {
            setErrors(errors);
        } else {
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
            console.log("newStudio: ", updatedStudio);
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
    }, [])
    
        return ReactDOM.createPortal(
            <>
        <div className={"overlay-styles"}></div>    
        <div className="modal-styles form-container">
            <form className={"form"}>
            <h1 className={'form-header'}>Update Studio</h1>
            {
                errors.length > 0 && 
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            }
            <label>Studio name</label>
            <input className={"form-field"} placeholder={"Studio name"} value={name} onChange={e => set_name(e.target.value)} />
            
            <label>Federation ID</label>
            <input className={"form-field"} placeholder={"federation id"} value={federation_id} onChange={e => set_federation_id(e.target.value)} />

            <label>{"Address (number street name, city, state zipcode)"}</label>
            <input className={"form-field"} placeholder={"address"} value={address} onChange={e => set_address(e.target.value)} />

            <label>Studio contact phone</label>
            <input className={"form-field"} placeholder={"studio contact phone number"} value={phone_contact} onChange={e => set_phone_contact(e.target.value)} />

            <label> Studio contact email</label>
            <input className={"form-field"} placeholder={"studio contact email"} type="email" value={email_contact} onChange={e => set_email_contact(e.target.value)} />

            <label>Studio bio</label>
            <textarea className={"form-field"} placeholder={"tell us about your studio"} value={studio_bio} onChange={e => set_studio_bio(e.target.value)} />

            <label>Studio art</label>
            <select value={martial_art} onChange={e => set_martial_art(e.target.value)}>
                <option>Select Martial Art</option>
                {Object.values(martialArts).map( art => (<option value={art.id}>{art.name}</option>)
                )}
            </select>

            <label></label>
            <button onClick={submit}>Update Studio</button>
            <button onClick={e => {e.preventDefault(); setEdit(!edit)}}>Cancel</button>

        </form>
        </div>
        </> ,
        document.getElementById("portal")       
    )
}
