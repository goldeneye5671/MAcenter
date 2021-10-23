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

export const fetchAllUsersAction = () => async(dispatch) => {
    const response = await fetch(`/api/users/`)
    if (response.ok) {
        const allUserProfileInfo = await response.json();
        await dispatch(allUserProfileInfo)
    }
}

export const fetchUserAction = (userId) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}`);
    if (response.ok){
        const userProfileInfo = await response.json();
        await dispatch(fetchUser(userProfileInfo));
    }
}

export const updateUserAction = (userId, user) => async(dispatch) => {
    const response = await fetch(`/api/users/${userId}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );
    if (response.ok) {
        const updatedUser = await response.json();
        dispatch(updateUser(updatedUser));
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
        case FETCH_ALL_USERS:
            const addAllUsersState = {...state};
            for (let user of action.allUsers) {
                addAllUsersState[[user.id]] = user;
            }
            return addAllUsersState;
        case UPDATE_USER:
            const updateUserState = {...state};
            updateUser[[action.user.id]] = action.user;
            return updateUserState;
        default: return state;
    }
}

export default userReducer;
