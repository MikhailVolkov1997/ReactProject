import { getUsers, unfollowUser, followUser } from "../api/api";
import { updateObjectInArray } from "../Utills/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = "CURRENT-PAGE"
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT"
const TOGLE_IS_FETCHING = 'TOGLE-IS-FETCHING'
const TOGLE_IS_FOLLOWING_PROGRESS = 'TOGLE-IS-FOLLOWING-PROGRESS'

let initialReducer = {
    arrayUsers: [],
    pageSize: 10,
    totalCount: 14,
    currentPage: 1,
    isFetching: true,
    togleIsFollowingProgress: []
}

const userReducer = (state = initialReducer, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                arrayUsers: updateObjectInArray(state.arrayUsers, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                arrayUsers: updateObjectInArray(state.arrayUsers, action.userId, "id", { followed: false })

            }
        case SET_USERS:
            return {
                ...state, arrayUsers: [...action.users]
            }
        case CURRENT_PAGE:
            return {
                ...state, currentPage: action.current
            }
        case TOTAL_USERS_COUNT:
            return {
                ...state, totalCount: action.count
            }
        case TOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                togleIsFollowingProgress: action.isFetching ?
                    [...state.togleIsFollowingProgress, action.userId]
                    : state.togleIsFollowingProgress.filter(id => id != action.userId)
            }
        default: return state;
    }
}


export const followAC = (userId) => { return { type: FOLLOW, userId } };
export const unfollowAC = (userId) => { return { type: UNFOLLOW, userId } };
export const setUsersAC = (users) => { return { type: SET_USERS, users } }
export const currentPageAC = (current) => { return { type: CURRENT_PAGE, current } }
export const setTotalUsersCountAC = (count) => { return { type: TOTAL_USERS_COUNT, count } }
export const togleIsFetchingAC = (isFetching) => { return { type: TOGLE_IS_FETCHING, isFetching } }
export const togleIsFollowingProgressAC = (isFetching, userId) => { return { type: TOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } }

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(togleIsFetchingAC(true))
        let data = await getUsers(currentPage, pageSize);
        dispatch(togleIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
    }
}

export const onChangedThunkCreator = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(togleIsFetchingAC(true));
        dispatch(currentPageAC(page));
        let data = await getUsers(page, pageSize);
        dispatch(setUsersAC(data.items));
        dispatch(togleIsFetchingAC(false));
    }
}

export const followUnfollowThunkCreate = async (userId, dispatch, apiMethod, actionCreate) => {
    dispatch(togleIsFollowingProgressAC(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreate(userId));
    }
    dispatch(togleIsFollowingProgressAC(false, userId));
}

export const unfollowUserThunkCreator = (userId) => {
    return (dispatch) => {
        let apiMethod = unfollowUser;
        let actionCreate = unfollowAC;
        followUnfollowThunkCreate(userId, dispatch, apiMethod, actionCreate);
    }
}

export const followUserThunkCreator = (userId) => {
    return (dispatch) => {
        let apiMethod = followUser;
        let actionCreate = followAC;
        followUnfollowThunkCreate(userId, dispatch, apiMethod, actionCreate);

    }
}


export default userReducer