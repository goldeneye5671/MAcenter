//actions
const FETCH_STUDIO = 'StudioState/FETCH_STUDIO';
const FETCH_ALL_STUDIOS = 'StudioState/FETCH_ALL_STUDIOS';
const UPDATE_STUDIO = 'StudioState/UPDATE_STUDIO';
const REMOVE_STUDIO = 'StudioState/REMOVE_STUDIO';

//action creators

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
        case FETCH_ALL_STUDIOS:
            const currentState = {...state};
            for (let studio of action.allStudios) {
                currentState[[studio.id]] = studio;
            }
            return currentState;
        case FETCH_STUDIO:
            const nextState = {...state};
            nextState[[action.studio.id]] = action.studio;
            return nextState;
        default: return state;
    }
}

export default studiosReducer;
