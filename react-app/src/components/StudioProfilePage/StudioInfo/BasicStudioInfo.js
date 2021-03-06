import React from 'react'
import { useSelector } from 'react-redux'
import { fetchUserAction, followUserAction, unfollowUserAction } from '../../../store/UserState';
import {useDispatch} from 'react-redux'
import StudioUpdate from '../StudioUpdate'

export default function BasicStudioInfo({owner, studio}) {
    const [edit, setEdit] = React.useState(false);
    const user = useSelector(state => state.session.user)
    const [followed, setFollowed] = React.useState(!(user?.followed_studios[studio?.id] === undefined));

    const dispatch = useDispatch();

    React.useEffect(
        () => {
            if (user) {
                dispatch(fetchUserAction(user.id))
            }
        }
    )

    function followAndUnfollow(){

        const followingInfo = {
            studioId: studio.id
        }
        if (followed) {
            dispatch(unfollowUserAction(followingInfo, user.id))
            setFollowed(false)
        } else {
            dispatch(followUserAction(followingInfo, user.id))
            setFollowed(true)
        }
    }

    return (
        <div className={"studio-info"}>
            {
                owner === true ? 
                    !edit ?
                        (<>
                            <h1>Studio Name: {studio?.name}</h1>
                            <ul>
                                <li>Owner: {studio?.owner?.first_name} {studio?.owner?.last_name}</li>
                                <li>Martial Art: {studio?.martial_art?.name}</li>
                            </ul>
                            <button onClick={e => {e.preventDefault(); setEdit(!edit)}}> edit </button>
                        </>)
                            :
                        (
                            <StudioUpdate studio={studio} edit={edit} setEdit={setEdit}/>
                        )

                        :
                    (
                        <>
                            <h1>Studio Name: {studio?.name}</h1>
                            <ul>
                                <li>Owner: {studio?.owner?.first_name} {studio?.owner?.last_name}</li>
                                <li>Martial Art: {studio?.martial_art?.name}</li>
                            </ul>
                            {
                                user ? 
                                    followed ? (
                                        <button onClick={followAndUnfollow}>unFollow</button>
                                    )
                                    :
                                    (
                                        <button onClick={followAndUnfollow}> Follow</button>
                                    )
                                :
                                null
                            }
                        </>
                    )
            }

        </div>
    )
}
