//actions
const CREATE_STUDIO = 'StudioState/CREATE_STUDIO';
const FETCH_STUDIO = 'StudioState/FETCH_STUDIO';
const FETCH_ALL_STUDIOS = 'StudioState/FETCH_ALL_STUDIOS';
const UPDATE_STUDIO = 'StudioState/UPDATE_STUDIO';
const REMOVE_STUDIO = 'StudioState/REMOVE_STUDIO';

const CLEAR_STUDIO_STATE = 'StudioState/CLEAR_STUDIO_STATE';

const CREATE_STUDIO_EVENT = 'StudioState/CREATE_STUDIO_EVENT';
const UPDATE_STUDIO_EVENT = 'StudioState/UPDATE_STUDIO_EVENT';
const REMOVE_STUDIO_EVENT = 'StudioState/REMOVE_STUDIO_EVENT';

const CREATE_STUDIO_REVIEW = 'StudioState/CREATE_STUDIO_REVIEW';
const UPDATE_STUDIO_REVIEW = 'StudioState/UPDATE_STUDIO_REVIEW';
const REMOVE_STUDIO_REVIEW = 'StudioState/REMOVE_STUDIO_REVIEW';

const CREATE_STUDIO_SCHEDULE = 'StudioState/CREATE_STUDIO_SCHEDULE';
const UPDATE_STUDIO_SCHEDULE = 'StudioState/UPDATE_STUDIO_SCHEDULE';
const REMOVE_STUDIO_SCHEDULE = 'StudioState/REMOVE_STUDIO_SCHEDULE';

//action creators

const createStudio = (studio) => (
    {
        type: CREATE_STUDIO,
        studio
    }
)

const fetchStudio = (studio) => (
    {
        type: FETCH_STUDIO,
        studio
    }
);

const fetchAllStudios = (allStudios) => (
    {
        type: FETCH_ALL_STUDIOS,
        allStudios
    }
);

const updateStudio = (studio) => (
    {
        type: UPDATE_STUDIO,
        studio
    }
);

const removeStudio = (studioId) => (
    {
        type: REMOVE_STUDIO,
        studioId
    }
);

const createStudioEvent = (studioEvent) => (
    {
        type: CREATE_STUDIO_EVENT,
        studioEvent
    }
);

const updateStudioEvent = (studioEvent) => (
    {
        type: UPDATE_STUDIO_EVENT,
        studioEvent
    }
);

const removeStudioEvent = (studioEvent) => (
    {
        type: REMOVE_STUDIO_EVENT,
        studioEvent
    }
)

const createStudioReview = (studioReview) => (
    {
        type: CREATE_STUDIO_REVIEW,
        studioReview
    }
)

const updateStudioReview = (studioReview) => (
    {
        type: UPDATE_STUDIO_REVIEW,
        studioReview
    }
)

const removeStudioReview = (studioReview) => (
    {
        type: REMOVE_STUDIO_REVIEW,
        studioReview   
    }
)

const createStudioSchedule = (studioSchedule) => (
    {
        type: CREATE_STUDIO_SCHEDULE,
        studioSchedule
    }
)
const updateStudioSchedule = (studioSchedule) => (
    {
        type: UPDATE_STUDIO_SCHEDULE,
        studioSchedule
    }
)
const deleteStudioSchedule = (studioSchedule) => (
    {
        type: REMOVE_STUDIO_SCHEDULE,
        studioSchedule
    }
)

const clearStudioState = () => ({
    type: CLEAR_STUDIO_STATE,
})

//thunks

export const clearStudioStateAction = () => async (dispatch) => {
    dispatch(clearStudioState())
}

export const createStudioAction = (studio) => async(dispatch) => {
    const response = await fetch(`/api/studios/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studio)
    });

    if (response.ok) {
        const studio = await response.json();
        return dispatch(createStudio(studio));
    }
}

export const updateStudioAction = (studioId, studio) => async(dispatch) => {
    const response = await fetch(`/api/studios/${studioId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(studio)
    });

    if (response.ok){
        const studio = await response.json();
        dispatch(updateStudio(studio))
    }
}

export const fetchAllStudiosAction = () => async(dispatch) => {
    const response = await fetch(`/api/studios/`);
    if (response.ok){
        const allStudios = await response.json();
        await dispatch(fetchAllStudios(allStudios));
    }
}

export const fetchOneStudioAction = (studioId) => async(dispatch) => {
    const response = await fetch(`/api/studios/${studioId}`);
    console.log("In the thunk")
    if (response.ok) {
        const oneStudio = await response.json();
        await dispatch(fetchStudio(oneStudio));
    }
}

export const createStudioEventAction = (event) => async(dispatch) => {
    const response = await fetch(`/api/studio-events/`,
    {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });
    if (response.ok) {
        const studioEvent = await response.json();
        await dispatch(createStudioEvent(studioEvent))
    }
}

export const updateStudioEventAction = (eventId, event) => async(dispatch) => {
    const response = await fetch(`/api/studio-events/${eventId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    });
    if (response.ok) {
        const updatedStudioEvent = await response.json();
        await dispatch(updateStudioEvent(updatedStudioEvent));
    }
}

export const removeStudioEventAction = (event) => async(dispatch) => {
    const response = await fetch(`/api/studio-events/${event.id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        await dispatch(removeStudioEvent(event))
    }
}

export const createStudioReviewAction = (review) => async(dispatch) => {
    const response = await fetch(`/api/studio-reviews/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        }
    );
    if (response.ok) {
        const review = await response.json();
        console.log(review)
        await dispatch(createStudioReview(review));
    }
}
export const updateStudioReviewAction = (reviewId, review) => async(dispatch) => {
    const response = await fetch(`/api/studio-reviews/${reviewId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        }
    );
    if (response.ok) {
        const review = await response.json()
        await dispatch(updateStudioReview(review))
    }
}
export const removeStudioReviewAction = (review) => async(dispatch) => {
    const response = await fetch(`/api/studio-reviews/${review.id}`,
        {
            method: "DELETE",
        }
    );
    if (response.ok) {
        const review = await response.json();
        await dispatch(removeStudioReview(review));
    }
}

export const createStudioScheduleAction = (studioSchedule) => async(dispatch) => {
    const response = await fetch(`/api/studio-schedules/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studioSchedule)
        }
    );
    if (response.ok) {
        const studioSchedule = await response.json();
        await dispatch(createStudioSchedule(studioSchedule));
    }
}

export const updateStudioScheduleAction = (studioScheduleId, studioSchedule) => async(dispatch) => {
    const response = await fetch(`/api/studio-schedules/${studioScheduleId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studioSchedule)
        }
    );
    if (response.ok) {
        const studioSchedule = await response.json();
        await dispatch(updateStudioSchedule(studioSchedule))
    }
}

export const removeStudioScheduleAction = (studioSchedule) => async(dispatch) => {
    const response = await fetch(`/api/studio-schedules/${studioSchedule.id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(studioSchedule)
        }
    );
    if (response.ok) {
        const studioSchedule = await response.json();
        await dispatch(deleteStudioSchedule(studioSchedule));
    }
}

//reducer

const initialState = {};
const studiosReducer = (state=initialState, action) => {
    switch(action.type) {
        case CREATE_STUDIO:
            let createStudioState = {...state};
            createStudioState[[action.studio.id]] = action.studio;
            return createStudioState
        case FETCH_ALL_STUDIOS:
            let fetchAllStudiosState = {...state};
            for (let studio of action.allStudios) {
                fetchAllStudiosState[[studio.id]] = studio;
            }
            return fetchAllStudiosState;
        case FETCH_STUDIO:
            const fetchStudioState = {...state};
            fetchStudioState[[action.studio.id]] = action.studio;
            return fetchStudioState;
        case UPDATE_STUDIO:
            const updateStudioState = {...state};
            updateStudioState[[action.studio.id]] = action.studio;
            return updateStudioState;
        case CREATE_STUDIO_EVENT:
            const createStudioEventState = {...state};
            createStudioEventState[[action.studioEvent.studio_id]].studio_events[[action.studioEvent.id]] = action.studioEvent;
            return createStudioEventState;
        case UPDATE_STUDIO_EVENT: 
            const updatedStudioEventState = {...state};
            updatedStudioEventState[[action.studioEvent.studio_id]].studio_events[[action.studioEvent.id]] = action.studioEvent;
            return updatedStudioEventState;
        case REMOVE_STUDIO_EVENT:
            const removeStudioEventState = {...state};
            delete removeStudioEventState[[action.studioEvent.studio_id]].studio_events[[action.studioEvent.id]];
            return removeStudioEventState;
        case CREATE_STUDIO_REVIEW:
            const createStudioReviewState = {...state};
            createStudioReviewState[[action.studioReview.studio_id]].studio_reviews[[action.studioReview.id]] = action.studioReview
            return createStudioReviewState;
        case UPDATE_STUDIO_REVIEW:
            const updatedStudioReviewState = {...state};
            updatedStudioReviewState[[action.studioReview.studio_id]].studio_reviews[[action.studioReview.id]] = action.studioReview
            return updatedStudioReviewState;
        case REMOVE_STUDIO_REVIEW:
            const removeStudioReviewState = {...state};
            delete removeStudioReviewState[[action.studioReview.studio_id]].studio_reviews[[action.studioReview.id]];
            return removeStudioReviewState;
        case CREATE_STUDIO_SCHEDULE:
            const createStudioSchedule = {...state};
            createStudioSchedule[[action.studioSchedule.studio_id]].studio_schedule[[action.studioSchedule.id]] = action.studioSchedule;
            return createStudioSchedule;
        case UPDATE_STUDIO_SCHEDULE:
            const updateStudioSchedule = {...state};
            updateStudioSchedule[[action.studioSchedule.studio_id]].studio_schedule[[action.studioSchedule.id]] = action.studioSchedule;
            return updateStudioSchedule;
        case REMOVE_STUDIO_SCHEDULE:
            const removeStudioSchedule = {...state};
            delete removeStudioSchedule[[action.studioSchedule.studio_id]].studio_schedule[[action.studioSchedule.id]];
            return removeStudioSchedule;
        case CLEAR_STUDIO_STATE:
            return {};
        default: return state;
    }
}

export default studiosReducer;
