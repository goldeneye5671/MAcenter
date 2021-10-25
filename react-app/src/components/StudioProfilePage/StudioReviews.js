import React from 'react'
import StudioReviewContainer from './StudioReviewContainer';

export default function StudioReviews({studio}) {
    return (
        <>
        <h4>Reviews</h4>
        <div>
            {studio.studio_reviews.map(studio_review => <StudioReviewContainer studio_review={studio_review}/>)}
        </div>
        </>
    )
}
