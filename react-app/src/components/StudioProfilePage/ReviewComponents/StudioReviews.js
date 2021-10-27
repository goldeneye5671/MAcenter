import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StudioEventEditForm from '../EventComponents/StudioEventEditForm';
import StudioReviewContainer from './StudioReviewContainer';
import StudioReviewsAddForm from './StudioReviewsAddForm';

export default function StudioReviews() {
    const {studioId} = useParams();
    const [edit, setEdit] = React.useState(false)
    const studioReviews = useSelector(state => Object.values(state.studios[studioId].studio_reviews))
    const user = useSelector(state => state.session.user);
    return (
        <>
        <h4>Reviews</h4>
        <div>
            {
                user ?
                    !edit ?
                        <>
                            <button onClick={e => setEdit(!edit)}>Add Review</button>
                            {
                                studioReviews.length ?
                                    studioReviews.map(studio_review => <StudioReviewContainer studio_review={studio_review} owner={studio_review?.user_id === user?.id}/>)
                                :
                                    (<p>no reviews</p>)
                            }
                        </>
                    :
                        <StudioReviewsAddForm edit={edit} setEdit={setEdit} studioId={parseInt(studioId)}/>
                :
                    studioReviews.length ?
                        studioReviews.map(studio_review => <StudioReviewContainer studio_review={studio_review} owner={studio_review?.user_id === user?.id}/>)
                    :
                        (<p>no reviews</p>)

            }
        </div>
        </>
    )
}
