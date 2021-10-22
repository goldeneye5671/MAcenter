import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMartialArtsAction } from '../../store/MartialArtState';

export default function EditUserProfilePage({user}) {
    const [loaded, setLoaded] = React.useState(false)
    const [first_name, set_first_name] = React.useState(user.first_name);
    const [last_name, set_last_name] = React.useState(user.last_name);
    const [email, set_email] = React.useState(user.email);
    const [martial_art, set_martial_art] = React.useState(user.martial_art.id);
    const [rank, set_rank] = React.useState(user.ranks);
    const [studio, set_studio] = React.useState(user.studio_names);
    const martialArts = useSelector(state => state.martialArts)

    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            dispatch(fetchAllMartialArtsAction());
            setLoaded(true);
        })()
    }, [dispatch])

    return (
        <form>
            <h1>edit form</h1>

            <label>First Name</label>
            <input value={first_name} onChange={e => set_first_name(e.target.value)}></input>

            <label>Last Name</label>
            <input value={last_name} onChange={e => set_last_name(e.target.value)}></input>

            <label>Email</label>
            <input type="email" value={email} onChange={e => set_email(e.target.value)}></input>

            <label>Martial Art</label>
            <select value={martial_art} onChange={e => set_martial_art(e.target.value)}>
                {Object.values(martialArts).map( art => (<option value={art.id}>{art.name}</option>)
                )}
            </select>

            <label>Rank</label>
            <select value={rank} onChange={e => set_rank(e.target.value)}>
                {martialArts[martial_art]?.ranks?.map(rank => {console.log(rank); return (<option value={rank.id}>{rank.name} Rank number {rank.number}</option>)})}
            </select>
        </form>
    )
}
