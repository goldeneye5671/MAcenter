import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createStudioReviewAction, updateStudioReviewAction } from '../../../store/StudioState';
import ReactDOM from 'react-dom'
import NameAndDesc from '../../Form/NameAndDesc';
import Rating from '../../Form/Rating';

export default function StudioReviewEditForm({edit, setEdit, studioReview}) {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const [user_id, set_user_id] = React.useState(user.id);
    const [title, set_title] = React.useState(studioReview.title);
    const [content, set_content] = React.useState(studioReview.content);
    const [rating, set_rating] = React.useState(studioReview.rating);
    
    const [errors, set_errors] = React.useState([]);
    const [submitClicked, setSubmitClicked] = React.useState(false)

    const [nameAndDescValidated, setNameAndDescValidated] = React.useState(false);


    function submit (e) {
        const errors = [];
        e.preventDefault();
        setSubmitClicked(true)
        if(nameAndDescValidated) {
            const studio_review = {
                studio_id: studioReview.studio_id,
                user_id,
                title,
                content,
                rating
            }
            dispatch(updateStudioReviewAction(studioReview.id, studio_review));
            setEdit(!edit);
        }
    }

    return ReactDOM.createPortal(
        <>
        <div className={"overlay-styles"}></div>
        <div className={"form-container modal-styles"}>
            <form className={"form"}>
        
                <h1>Edit review</h1>

                <NameAndDesc 
                    name={title}
                    desc={content}
                    setName={set_title}
                    setDesc={set_content}
                    setValidated={setNameAndDescValidated}
                    submitClicked={submitClicked}
                />

                <Rating
                    rating={rating}
                    setRating={set_rating}
                />

                <button onClick={submit}>update review</button>
                <button onClick={e => {e.preventDefault(); setEdit(!edit)}}>cancel</button>
            </form>
        </div>
    </>,
    document.getElementById("portal")
    )
}
