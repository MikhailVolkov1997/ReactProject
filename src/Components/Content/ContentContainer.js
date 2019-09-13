import React from 'react';
import Content from "./Content"
import {AddPostActionCreate, UpdateNewPostTextActionCreate, } from "../../Redux/Posts"
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        
            post:state.dataPosts.arrayPosts,
            newPostText:state.dataPosts.text
            }    
}

let mapDispatchToProps = (dispatch) => {
    
return {
            addPost: () => {
                dispatch(AddPostActionCreate());
            },
            updateNewPost: (text) => {
                dispatch(UpdateNewPostTextActionCreate(text));
            }
        }
}

let ContentComponent =  connect (mapStateToProps, mapDispatchToProps)(Content);

export default ContentComponent;