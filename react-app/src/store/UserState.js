//actions

const FETCH_USER = 'UserState/FETCH_USER';
const FETCH_ALL_USERS = 'UserState/FETCH_ALL_USERS';
const UPDATE_USER = 'UserState/UPDATE_USER';
const REMOVE_USER = 'UserState/REMOVE_USER';
// const CREATE_USER = 'UserState/CREATE_USER';

//action creators

const fetchUser = (user) => ({
    type: FETCH_USER,
    user
});

const fetchAllUsers = (allUsers) => ({
    type: FETCH_ALL_USERS,
    allUsers
});

const updateUser = (user) => ({
    type: UPDATE_USER,
    user
});

const removeUser = (userId) => ({
    action: REMOVE_USER,
    userId
});

//thunks

export const fetchUserAction = (userId) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}`);
    if (response.ok){
        const userProfileInfo = await response.json();
        console.log(userProfileInfo)
        await dispatch(fetchUser(userProfileInfo));
    } else {
        //if the userid doesnt exist 
        return {};
    }
    
}


//reducer
const initialState = {}
const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USER: 
            const addUserState = {...state};
            addUserState[action.user.id] = action.user;
            return addUserState;
        default: return state;
    }
}

export default userReducer;
