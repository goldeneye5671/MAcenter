//actions
const CREATE_STUDIO = 'StudioState/CREATE_STUDIO';
const FETCH_STUDIO = 'StudioState/FETCH_STUDIO';
const FETCH_ALL_STUDIOS = 'StudioState/FETCH_ALL_STUDIOS';
const UPDATE_STUDIO = 'StudioState/UPDATE_STUDIO';
const REMOVE_STUDIO = 'StudioState/REMOVE_STUDIO';

const CREATE_STUDIO_EVENT = 'StudioState/CREATE_STUDIO_EVENT';
const UPDATE_STUDIO_EVENT = 'StudioState/UPDATE_STUDIO_EVENT';
const REMOVE_STUDIO_EVENT = 'StudioState/REMOVE_STUDIO_EVENT';

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

//thunks

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
        dispatch(createStudio(studio));
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
        default: return state;
    }
}

export default studiosReducer;
