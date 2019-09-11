import React from 'react';
import Content from "./Content"
import {AddPostActionCreate, UpdateNewPostTextActionCreate, setUsersProfileAC } from "../../Redux/Posts"
import { connect } from 'react-redux';


class ContentContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return  <Content {...this.props}  />
       
    }
}

let mapStateToProps = (state) => {
    return {
        
            post:state.dataPosts.arrayPosts,
            newPostText:state.dataPosts.text,
            profile:state.dataPosts.profile
            }    
}

let mapDispatchToProps = (dispatch) => {
    
return {
            addPost: () => {
                dispatch(AddPostActionCreate());
            },
            updateNewPost: (text) => {
                dispatch(UpdateNewPostTextActionCreate(text));
            },
            setUserProfile:(profile) =>{
                dispatch(setUsersProfileAC(profile))
            }
        }
}

export default connect (mapStateToProps, mapDispatchToProps)(ContentContainer);

