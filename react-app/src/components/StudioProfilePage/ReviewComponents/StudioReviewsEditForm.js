import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createStudioReviewAction, updateStudioReviewAction } from '../../../store/StudioState';

export default function StudioReviewEditForm({edit, setEdit, studioReview}) {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    const [user_id, set_user_id] = React.useState(user.id);
    const [title, set_title] = React.useState(studioReview.title);
    const [content, set_content] = React.useState(studioReview.content);
    const [rating, set_rating] = React.useState(studioReview.rating);
    
    const [errors, set_errors] = React.useState([]);


    function submit (e) {
        const errors = [];
        e.preventDefault();
        if (!user_id) errors.push("You must be signed in to leave a review. Please sign in");
        if (!title) errors.push("Please provide a title in the title field");
        if (!content) errors.push("Please provide a review")
        if (!rating) errors.push("Please provide a number rating");
        if (!studioReview.studio_id) errors.push("Please provide a studio");
        if (errors.length > 0) {
            set_errors(errors);
        } else {
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

    return (
        <form>
            {
                errors && <ul>{errors.map(error => <li>{error}</li>)}</ul>
            }

            <label>title</label>
            <input value={title} onChange={e => set_title(e.target.value)}></input>

            <label>write a review</label>
            <textarea value={content} onChange={e => set_content(e.target.value)}/>

            <label>rating</label>
            <div>
                <label>1</label><input onChange={e => set_rating(1)} type="radio" value={1} checked={rating === 1}></input>
                <label>2</label><input onChange={e => set_rating(2)} type="radio" value={2} checked={rating === 2}></input>
                <label>3</label><input onChange={e => set_rating(3)} type="radio" value={3} checked={rating === 3}></input>
                <label>4</label><input onChange={e => set_rating(4)} type="radio" value={4} checked={rating === 4}></input>
                <label>5</label><input onChange={e => set_rating(5)} type="radio" value={5} checked={rating === 5}></input>
            </div>

            <button onClick={submit}>update review</button>
            <button onClick={e => {e.preventDefault(); setEdit(!edit)}}>cancel</button>
        </form>
    )
}
