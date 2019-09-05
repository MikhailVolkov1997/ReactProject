    const ADD_POST = 'ADD-POST';
    const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

    let initialReducer = { ArrayPosts : [
        { id: 1,avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
        
        {id:2, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
        
        {id:3, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"}

    ],
    text:"react cool",
    }

    const postReducer = (state = initialReducer, action) => {
        switch (action.type) {
            case ADD_POST:
                    let add = {
                        id:4,
                        avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png",
                        message: state.text
                    }
                    state.ArrayPosts.push(add);
                   
                    state.text="";
                    return state;
            case UPDATE_NEW_POST_TEXT:
                    state.text = action.newText;
                    return state;
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
    export default postReducer;