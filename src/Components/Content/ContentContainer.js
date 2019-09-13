import React from 'react';
import Content from "./Content"
import {AddPostActionCreate, UpdateNewPostTextActionCreate, setUsersProfileAC } from "../../Redux/Posts"
import { connect } from 'react-redux';
import * as Axios from "axios"


class ContentContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount () {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`).then(response => {
            this.props.setUserProfile(response.data);
           
    })
}

    render() {
        
        return  <Content {...this.props}  />
       
    }
}

let mapStateToProps = (state) => {
    return {
        
            post:state.dataPosts.arrayPosts,
            newPostText:state.dataPosts.text,
            profile:state.dataPosts.profile,
            userId:state.auth.userId
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

