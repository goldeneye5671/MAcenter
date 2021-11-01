import React from 'react'
import BasicUserInfo from './BasicUserInfo'
import Bio from './Bio'

export default function UserProfilePage({user}) {
    
    return (
        <div>
            <BasicUserInfo user={user}/>
            <Bio user={user}/>
            
            {/* <ImagesOfMe /> */}
        </div>
    )
}
