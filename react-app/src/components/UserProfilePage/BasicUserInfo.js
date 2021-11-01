import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditUserProfilePage from './EditUserProfilePage'

export default function BasicUserInfo({user}) {
    const [edit, setEdit] = React.useState()
    const {userId} = useParams()
    const userState = useSelector(state => state.session.user)
    return (
            <div className={"user-info"}>
                {
                    edit && (
                        <EditUserProfilePage user={user} edit={edit} setEdit={setEdit} />
                    )
                }
                <div>
                    <h1>{user?.first_name} {user?.last_name}</h1>
                    <h4>{user?.martial_art?.name}</h4>
                </div>

                {
                    userState?.id === parseInt(userId) &&
                        <button className={"user-edit-button"} onClick={e => setEdit(edit => !edit)}>edit</button>
                }
                <div>
                    <h3>{user?.ranks?.name}</h3>
                    <p>{user?.ranks?.rank_number}</p>
                </div>
            </div>
    )
}
