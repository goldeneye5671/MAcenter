import React from 'react'

export default function Map({studio}) {
    return (
        <>
        <div>
            {/* Map will go here */}
            <h4 className={"headers-center-only"}>Address</h4>
            <p className={"headers-center-only"}>{studio?.address}</p>
        </div>
        </>
    )
}
