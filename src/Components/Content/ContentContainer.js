import React from 'react';
import Content from "./Content"
import {AddPostActionCreate, UpdateNewPostTextActionCreate, setUsersProfileAC } from "../../Redux/Posts"
import { connect } from 'react-redux';
import * as Axios from "axios"
import { getProfile } from '../../api/api';



class ContentContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount () {
        getProfile(this.props.userId).then(data => {
            this.props.setUserProfile(data);
           
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

