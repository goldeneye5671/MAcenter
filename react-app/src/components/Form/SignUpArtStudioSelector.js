import React from 'react'
import Studio from './Studio'
import MartialArt from './MartialArt'
import Rank from './Rank'

export default function SignUpArtStudioSelector({
    martialArts,
    studios,
    martialArt,
    studio,
    setMartialArt,
    setStudio,
    setRank,
    rank,
    submitClicked,
    setValidated
}) {

    const [martialArtsValidated, setMartialArtsValidated] = React.useState(false);
    const [rankValidated, setRankValidated] = React.useState(false);
    const [studioValidated, setStudioValidated] = React.useState(false);

    React.useState(
        () => {
            console.log(submitClicked)
            if (
                martialArtsValidated &&
                rankValidated &&
                studioValidated
            ) {
                setValidated(true);
            } else {
                setValidated(false)
            }
        },
        [
            studio,
            rank,
            martialArt
        ]
    )

    return (
        <div className={"fields-container"}>
            <MartialArt 
                martialArt={martialArt}
                setMartialArt={setMartialArt}
                martialArts={martialArts}
                submitClicked={submitClicked}
                setValidated={setMartialArtsValidated}
            />

            <Rank
                martialArts={martialArts}
                martialArt={martialArt}
                rank={rank}
                setRank={setRank}
                submitClicked={submitClicked}
                setValidated={setRankValidated}
            />

            <Studio
                studios={studios}
                studio={studio}
                setStudio={setStudio}
                submitClicked={submitClicked}
                setValidated={setStudioValidated}
            />
        </div>
    )
}
