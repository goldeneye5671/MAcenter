import React from 'react'

import { useSelector } from 'react-redux'

export default function MartialArtProfilePage({activeArt}) {

    const activeMartialArt = useSelector(state => state?.martialArts[activeArt])

    return (
        <div className="martial-arts-profile-page">
            {
                activeArt && (
                    <>
                        <div>
                            <h2>About {activeMartialArt?.name}</h2>
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
