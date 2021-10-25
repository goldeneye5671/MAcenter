import React from 'react'

export default function StudioReviewContainer({studio_review}) {
    return (
        <div>
            <h5>{studio_review.title}</h5>
            <p><strong>rating: {studio_review.rating}</strong></p>
            <p>{studio_review.content}</p>
        </div>
    )
}
