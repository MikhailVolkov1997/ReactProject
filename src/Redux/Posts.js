import { getProfile } from "../api/api";

    const ADD_POST = 'ADD-POST';
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
    const SET_USERS_PROFILE ="SET-USERS-PROFILE";
 
    let initialReducer = { arrayPosts : [
        { id: 1,avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
        
        {id:2, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
        
        {id:3, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"}

    ],
    text:"react cool",
    profile:null
    }


    const postReducer = (state = initialReducer, action) => {
      
        switch (action.type) {
            case ADD_POST:
                    let add = {
                        id:4,
                        avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png",
                        message: state.text
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
            
            default: return state;
        }
     
    }
    export const AddPostActionCreate = () => {
        return ( {
            type:ADD_POST
        } )
    }
    export const UpdateNewPostTextActionCreate = (text) => {
        return (
            {
                type:UPDATE_NEW_POST_TEXT,
                newText:text
            }
        )
    }
    export const setUsersProfileAC = (profile) => {
            return {
                type:SET_USERS_PROFILE,
                profile
            }
    }

export const setUserProfileThunkCreate = (userId) => {
    return (dispatch) => {
        getProfile(userId).then(data => {
         dispatch(setUsersProfileAC(data));
         })
    }
}
export const setUserProfileThunkCreate_2 = (userId) => {
    return (dispatch) => {
        getProfile(userId).then(data => {
            dispatch(setUsersProfileAC(data));
    })
    }
}
    export default postReducer;