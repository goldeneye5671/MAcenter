import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createStudioReviewAction } from '../../../store/StudioState';
import ReactDOM from 'react-dom';
import NameAndDesc from '../../Form/NameAndDesc';
import Rating from '../../Form/Rating';

export default function StudioReviewsAddForm({edit, setEdit, studioId}) {
    const user = useSelector(state => state.session.user)

    const dispatch = useDispatch();

    const [user_id, set_user_id] = React.useState(user.id);
    const [title, set_title] = React.useState('');
    const [content, set_content] = React.useState('');
    const [rating, set_rating] = React.useState(5);
    
    const [submitClicked, setSubmitClicked] = React.useState(false);

    const [nameAndDescValidated, setNameAndDescValidated] = React.useState(false);

    const [errors, set_errors] = React.useState([]);


    function submit (e) {
        e.preventDefault();
        setSubmitClicked(true)
        if(nameAndDescValidated) {
            const studioReview = {
                studio_id: studioId,
                user_id,
                title,
                content,
                rating
            }
            dispatch(createStudioReviewAction(studioReview));
            setEdit(!edit);
        }
    }

    return ReactDOM.createPortal(
        <>
        <div className={"overlay-styles"}></div>
        <div className={"form-container modal-styles"}>
            <form className={"form"}>
                {
                    errors && <ul>{errors.map(error => <li>{error}</li>)}</ul>
                }

                <h1>Add Review</h1>

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

                <button onClick={submit}>create review</button>
                <button onClick={e => {e.preventDefault(); setEdit(!edit)}}>cancel</button>
            </form>
        </div>
        </>,
        document.getElementById("portal")
    )
}
