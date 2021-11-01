import React from 'react'
import { useSelector } from 'react-redux'
import StudioUpdate from '../StudioUpdate'

export default function BasicStudioInfo({owner, studio}) {
    const [edit, setEdit] = React.useState(false)
    const user = useSelector(state => state.session.user)

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
                    (<>
                        <h1>Studio Name: {studio?.name}</h1>
                        <ul>
                            <li>Owner: {studio?.owner?.first_name} {studio?.owner?.last_name}</li>
                            <li>Martial Art: {studio?.martial_art?.name}</li>
                        </ul>
                        {/* <button onClick={e => {e.preventDefault(); setEdit(!edit)}}> edit </button> */}
                    </>)
            }

        </div>
    )
}
