    import { getProfile, updateStatus, getStatus, uploadPhoto } from "../api/api";
    

        const ADD_POST = 'ADD-POST';
        const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
        const SET_USERS_PROFILE ="SET-USERS-PROFILE";
        const SET_STATUS = 'SET-STATUS';
        const DELETE_POST = "DELETE-POST";
        const UPLOAD_PHOTO = "UPLOAD-PHOTO"


        let initialReducer = { arrayPosts : [
            { id: 1,avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
            
            {id:2, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
            
            {id:3, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"}

        ],
        profile:null,
        status:"",
        photo: ""
        }


        const postReducer = (state = initialReducer, action) => {
        
            switch (action.type) {
                case ADD_POST:
                        let add = {
                            id:4,
                            avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png",
                            message: action.newPost
                        }
                        let copyState = {...state};
                    
                        return {copyState,
                        arrayPosts : [...state.arrayPosts,(add)],
                        text: ""};
                case UPDATE_NEW_POST_TEXT:
                        
                        return {
                            ...state,
                        text:action.newText
                        }
                case SET_USERS_PROFILE: 
                        return {
                            ...state,
                            profile: action.profile
                        }
                case SET_STATUS:
                    return {
                        ...state,
                        status: action.status
                    }
                case DELETE_POST: 
                    return{
                        ...state, 
                        arrayPosts: state.arrayPosts.filter(p => p.id != action.id)
                    }
                case UPLOAD_PHOTO: 
                    return {
                            ...state, 
                            photo: action.photo
                }
                
                default: return state;
            }
        
        }
        export const AddPostActionCreate = (newPost) => {
            return ( {
                type:ADD_POST,
                newPost
            } )
        }
        export const setUsersProfileAC = (profile) => {
                return {
                    type:SET_USERS_PROFILE,
                    profile
                }
        }

        export const setStatusAC = (status) => {
            
            return {
                type:SET_STATUS,
                status
            }
        }

        export const deletePostActionCreate = (id) => {
            return {
                type:DELETE_POST,
                id
            }
        }

        export const uploadPhotoSucces = (photo) => {
            return {
                type:UPLOAD_PHOTO,
                photo
            }
        }

    export const setUserProfileThunkCreate = (userId) => {
        return async (dispatch) => {
        let data = await getProfile(userId);
            dispatch(setUsersProfileAC(data));
        }
    }

    export const setUserProfileThunkCreate_2 = (userId) => {
        return async (dispatch) => {
        let data = await getProfile(userId);
                dispatch(setUsersProfileAC(data));
        }
    }

    export const updateStatusThunkCreate = (status) => {
        return (dispatch) => {
        updateStatus(status);
                    dispatch(setStatusAC(status));
        }
    }

    export const getStatusThunkCreate = (userId) => {
    
        return (dispatch) => {
        return getStatus(userId).then(data => {  
                dispatch(setStatusAC(data.data));
            })
        }
    }

    export const UploadPhoto = (photo) => {

        return (dispatch) => {
            return uploadPhoto(photo).then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(uploadPhotoSucces(response.data.data.photos));
                }
            })
        }
    }

        export default postReducer;

        