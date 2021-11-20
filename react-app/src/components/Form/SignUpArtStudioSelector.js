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

    const [showMartialArt, setShowMartialArt] = React.useState(false);
    const [showStudio, setShowStudio] = React.useState(false);


    React.useEffect(
        () => {
            if (showMartialArt === false) {
                setShowStudio(false)
            }

            if (martialArt !== "null") {
                setShowMartialArt(true);
                if (studio !== "null") {
                    setShowStudio(true)
                }
            }

            //if the martial arts check box is checked and if the studio check box is checked
                    //check all of the validators and if they are all true
                        //set validated to true
                //if the studio check box is not checked
                    //check all of the validators except the studio and if the specified validators are true
                        //set validated to true
            //if none of the check boxes are checked
                // no validators are checked and setValidated is true
                if (showMartialArt && showStudio) {
                    if (martialArtsValidated && rankValidated && studioValidated) {
                        console.log("both showMartialart and showStudio are true")
                        setValidated(true);
                    } else {
                        setValidated(false);
                    }
                } else if (showMartialArt && !showStudio) {
                    if (martialArtsValidated) {
                        console.log("Only showMartialArt is true")
                        setValidated(true);
                    } else {
                        setValidated(false);
                    }
                } else if (!showMartialArt && !showStudio) {
                    console.log("All show are false")
                    // setStudio("null");
                    // setMartialArt("null");
                    // setRank("null")
                    setValidated(true)
                } else {
                    setValidated(false)
                }
            },
        [
            studio,
            rank,
            martialArt,
            martialArts,
            studios,
            martialArtsValidated,
            studioValidated,
            rankValidated,
            setValidated,
            showMartialArt,
            showStudio
        ]
    )

    return (
        <div className={"fields-container"}>

            <label>Do you practice a martial art?</label>
            <br />
            <label>Yes</label><input type={"radio"} onChange={e => setShowMartialArt(true)} value={true} checked={showMartialArt === true}/>
            <br />
            <label>No</label><input type={"radio"} onChange={e => setShowMartialArt(false)} value={false} checked={showMartialArt === false}/>
            <br/>
            {
                showMartialArt && (
                    <>
                        <MartialArt 
                            martialArt={martialArt}
                            setMartialArt={setMartialArt}
                            martialArts={martialArts}
                            submitClicked={submitClicked}
                            setValidated={setMartialArtsValidated}
                            shown={showMartialArt}
                        />

                        <Rank
                            martialArts={martialArts}
                            martialArt={martialArt}
                            rank={rank}
                            setRank={setRank}
                            submitClicked={submitClicked}
                            setValidated={setRankValidated}
                            shown={showMartialArt}
                        />

                        <label>Do you practice at a studio?</label>
                        <br />
                        <label>Yes</label><input type={"radio"} onChange={e => setShowStudio(true)} value={true} checked={showStudio === true}/>
                        <br />
                        <label>No</label><input type={"radio"} onChange={e => setShowStudio(false)} value={false} checked={showStudio === false}/>
                        <br/>

                        {
                            showStudio && (
                                <Studio
                                    studios={studios}
                                    studio={studio}
                                    setStudio={setStudio}
                                    submitClicked={submitClicked}
                                    setValidated={setStudioValidated}
                                    shown={showStudio}
                                />
                            )
                        }
                    </>
                )
            }
            </div>
    )
}
