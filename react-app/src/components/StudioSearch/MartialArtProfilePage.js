import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAction, unfollowUserMartialArtAction } from '../../store/UserState'
import MartialArtForm from './MartialArtForm'

export default function MartialArtProfilePage({activeArt}) {

    const activeMartialArt = useSelector(state => state?.martialArts[activeArt])
    const user = useSelector(state => state.session.user)
    // const myUser = useSelector(state => state?.session?.users[user.id] ? state?.user[user.id] : null)
    const [isFollowing, setIsFollowing] = React.useState(user ? user.martial_arts[activeArt] !== undefined : false)
    const [isEdit, setIsEdit] = React.useState(false);
    
    const dispatch = useDispatch()

    React.useState(
        () => {
            if (user) {
                dispatch(fetchUserAction(user.id))
            }
        }
    )

        async function submit(e) {
            e.preventDefault();
            let updatedInformation = {
                maid: activeArt,
                ma_ranks: []
            }

            for (let rank of Object.values(user.ranks)) {
                if (rank.martial_art_id === activeMartialArt.id) {
                    updatedInformation.ma_ranks.push(rank.id)
                }
            }
            const err = await dispatch(unfollowUserMartialArtAction(updatedInformation, user.id))
            console.log(updatedInformation)
        }

    return (
        <div className="martial-arts-profile-page">
            {
                activeArt && (
                    <>
                        {
                            isEdit && (
                                <MartialArtForm user={user} martialArt={activeMartialArt} setIsEdit={setIsEdit}/>
                            )
                        }
                        <div>
                            <h2>About {activeMartialArt?.name}</h2>
                            {
                                user && (
                                    !isFollowing ?
                                        <button onClick={e => {
                                            setIsEdit(true);
                                        }}>I practice this...</button>
                                    :
                                        <button onClick={submit}>I no longer practice this...</button>
                                )
                            }
                            <p>{activeMartialArt?.bio}</p>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Founded {activeMartialArt?.creation_date}
                                </li>
                                <li>
                                    Difficulty Level {activeMartialArt?.difficulty_level}
                                </li>
                                <li>
                                    Art Type {activeMartialArt?.art_type}
                                </li>
                                <li>
                                    Region {activeMartialArt?.region}
                                </li>    
                            </ul>
                        </div>

                    </>
                )
            }
        </div>
    )
}
