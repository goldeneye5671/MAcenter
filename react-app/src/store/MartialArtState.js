//actions

const FETCH_MARTIAL_ART = 'MartialArtState/FETCH_MARTIAL_ART';
const FETCH_ALL_MARTIAL_ARTS = 'MartialArtState/FETCH_ALL_MARTIAL_ARTS';
const UPDATE_MARTIAL_ART = 'MartialArtsState/UPDATE_MARTIAL_ART';
const REMOVE_MARTIAL_ART = 'MartialArtsState/REMOVE_MARTIAL_ART';

//action creators

const fetchMartialArt = (martialArt) => (
    {
        type: FETCH_MARTIAL_ART,
        martialArt
    }
);

const fetchAllMartialArts = (allMartialArts) => (
    {
        type: FETCH_ALL_MARTIAL_ARTS,
        allMartialArts
    }
);

const updateMartialArt = (martialArt) => (
    {
        type: UPDATE_MARTIAL_ART,
        martialArt
    }
);

const removeMartailArt = (martialArtId) => (
    {
        type: REMOVE_MARTIAL_ART,
        martialArtId
    }
);

//thunks

export const fetchAllMartialArtsAction = () => async(dispatch) => {
    const response = await fetch(`/api/martial-arts/`);
    if (response.ok){
        const allMartialArts = await response.json();
        await dispatch(fetchAllMartialArts(allMartialArts))
    }
}

//reducer

const initialState = {};
const martialArtsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_MARTIAL_ARTS: 
            const currentState = {...state};
            for (let art of action.allMartialArts) {
                console.log(art)
                currentState[[art.id]] = art;
            }
            return currentState;
        default: return state;
    }
}

export default martialArtsReducer
