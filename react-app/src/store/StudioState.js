//actions
const CREATE_STUDIO = 'StudioState/CREATE_STUDIO';
const FETCH_STUDIO = 'StudioState/FETCH_STUDIO';
const FETCH_ALL_STUDIOS = 'StudioState/FETCH_ALL_STUDIOS';
const UPDATE_STUDIO = 'StudioState/UPDATE_STUDIO';
const REMOVE_STUDIO = 'StudioState/REMOVE_STUDIO';

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
    if (response.ok) {
        const oneStudio = await response.json();
        await dispatch(fetchStudio(oneStudio));
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
        default: return state;
    }
}

export default studiosReducer;
