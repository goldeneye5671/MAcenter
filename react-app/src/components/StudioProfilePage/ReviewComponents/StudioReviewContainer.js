import React from 'react'
import { useDispatch } from 'react-redux'
import { removeStudioReviewAction } from '../../../store/StudioState'
import StudioReviewsEditForm from './StudioReviewsEditForm'

export default function StudioReviewContainer({studio_review, owner}) {
    
    const [edit, setEdit] = React.useState(false)
    
    const dispatch = useDispatch()

    React.useEffect(() => {
        console.log(edit)
    }
    , [edit])

    function deleteHandler (e) {
        e.preventDefault();
        dispatch(removeStudioReviewAction(studio_review))
    }

    return (
        <>
        {                
            owner ? 
                !edit ?
                    (    
                        <div>
                            <h5>{studio_review?.title}</h5>
                            <p><strong>rating: {studio_review?.rating}</strong></p>
                            <p>{studio_review?.content}</p>
                            <button onClick={e => setEdit(!edit)}>edit</button>
                            <button onClick={deleteHandler}>delete</button>
                        </div>
                    )
                :
                    <>
                        <StudioReviewsEditForm studioReview={studio_review} edit={edit} setEdit={setEdit}/>
                    </>
            :
            (
                <div>
                    <h5>{studio_review?.title}</h5>
                    <p><strong>rating: {studio_review?.rating}</strong></p>
                    <p>{studio_review?.content}</p>
                </div>
            )
        }
        </>
    )
}
