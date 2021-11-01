import React from 'react'
import { useDispatch } from 'react-redux'
import { removeStudioReviewAction } from '../../../store/StudioState'
import StudioReviewsEditForm from './StudioReviewsEditForm'

export default function StudioReviewContainer({studio_review, owner}) {
    
    const [edit, setEdit] = React.useState(false)
    
    const dispatch = useDispatch()


    function deleteHandler (e) {
        e.preventDefault();
        dispatch(removeStudioReviewAction(studio_review))
    }

    return (
        <div className={"studio-profile-review"}>
        {                
            owner ? 
                !edit ?
                    (
                        // <div className={"studio-review-container"}>
                        //     <div className={"studio-review-content"}>
                        //         <div className={"headers"}>
                        //             <h4>{studio_review?.title}</h4>
                        //             <p>rating: {studio_review.rating}</p>
                        //         </div>
                        //         <div>
                        //             <p>{studio_review.content}</p>
                        //         </div>
                        //         <div className={"edit-and-delete-button-container"}>
                        //             <button onClick={e => setEdit(!edit)}>edit</button>
                        //             <button onClick={e => deleteHandler(e)}>delete</button>
                        //         </div>
                        //     </div>
                        // </div>
                        <div>
                           <div className={"headers"}>
                               <h4>{studio_review.title}</h4>
                               <p>{studio_review.rating}</p>
                           </div> 
                           <div className={"studio-review-content"}>
                               <p>{studio_review.content}</p>
                           </div> 
                           
                           <div className={"edit-and-delete-button-container"}>
                                <button onClick={e => setEdit(!edit)}>edit</button>
                                <button onClick={e => deleteHandler(e)}>delete</button>
                            </div>
                            
                        </div>
                    )
                :
                    <>
                        <StudioReviewsEditForm studioReview={studio_review} edit={edit} setEdit={setEdit}/>
                    </>
            :
            (
                <div>
                <div className={"headers"}>
                    <h4>{studio_review.title}</h4>
                    <p>{studio_review.rating}</p>
                </div> 
                <div className={"studio-review-content"}>
                    <p>{studio_review.content}</p>
                </div> 
             </div>
            )
        }
        </div>
    )
}
