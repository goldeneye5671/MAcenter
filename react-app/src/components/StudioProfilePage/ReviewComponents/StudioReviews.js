import React from 'react'
import StudioReviewContainer from './StudioReviewContainer';

export default function StudioReviews({studio}) {
    return (
        <>
        <h4>Reviews</h4>
        <div>
            {
                Object.keys(studio?.studio_reviews).length ?
                    Object.values(studio?.studio_reviews).map(studio_review => <StudioReviewContainer studio_review={studio_review}/>)
                :
                    (<p>no reviews</p>)

            }
        </div>
        </>
    )
}
