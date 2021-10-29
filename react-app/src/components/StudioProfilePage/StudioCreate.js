import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';
import { createStudioAction } from '../../store/StudioState';



export default function StudioCreate() {
    const session = useSelector(state => state.session.user);
    const martialArts = useSelector(state => state.martialArts);
    
    const dispatch = useDispatch();

    const [loaded, setLoaded] = React.useState(false);
    const [errors, setErrors] = React.useState([]);

    const [name, set_name] = React.useState('');
    const [federation_id, set_federation_id] = React.useState(0);
    const [address, set_address] = React.useState('') ;
    const [phone_contact, set_phone_contact] = React.useState(0);
    const [email_contact, set_email_contact] = React.useState('');
    const [studio_bio, set_studio_bio] = React.useState('');
    const [martial_art, set_martial_art] = React.useState();
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
            console.log("newStudio: ", newStudio)
            dispatch(createStudioAction(newStudio));
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
        <div className={'form-container'}>
        <form className={"form"}>
            <h1 className={'form-header'}>Create new studio</h1>
            {
                errors.length > 0 && 
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            }

            <label>Studio Name</label>
            <input value={name} onChange={e => set_name(e.target.value)} />
            
            <label>Studio Federation Id</label>
            <input value={federation_id} onChange={e => set_federation_id(e.target.value)} />

            <label>{"Address (number street name, city, state zipcode)"}</label>
            <input value={address} onChange={e => set_address(e.target.value)} />

            <label>Phone Number for Studio</label>
            <input value={phone_contact} onChange={e => set_phone_contact(e.target.value)} />

            <label>Email for Studio</label>
            <input type="email" value={email_contact} onChange={e => set_email_contact(e.target.value)} />

            <label>Tell us about your studio</label>
            <textarea value={studio_bio} onChange={e => set_studio_bio(e.target.value)} />

            <label>Martial Art</label>
            <select value={martial_art} onChange={e => set_martial_art(e.target.value)}>
                <option>Select Martial Art</option>
                {Object.values(martialArts).map( art => (<option value={art.id}>{art.name}</option>)
                )}
            </select>

            <button onClick={submit}>Create Studio</button>

        </form>
        </div>
        
    )
}
