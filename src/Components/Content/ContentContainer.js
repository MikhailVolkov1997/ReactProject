import React from 'react';
import Content from "./Content"
import {AddPostActionCreate,  
     setUserProfileThunkCreate_2, 
     getStatusThunkCreate,
      updateStatusThunkCreate, 
      UploadPhoto} from "../../Redux/Posts"
      
import { connect } from 'react-redux';
import {withAuthRedirect} from '../Hoc/withAuthRedirect';
import { compose } from 'redux';
import StatusComponentWithHooks from './StatusComponentWithHooks';



class ContentContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount () {
       this.props.setUserProfileThunkCreate_2(this.props.userId);
        this.props.getStatusThunkCreate(this.props.userId);
       

    }

    render() {
       
        return  <>
        <StatusComponentWithHooks {...this.props} /> 
         {/* <StatusComponent {...this.props}/>  */}
        <Content {...this.props}  />
                
                </>
       
        }
    }

    let mapStateToProps = (state) => {
        return {
            
                post:state.dataPosts.arrayPosts,
                newPostText:state.dataPosts.text,
                profile:state.dataPosts.profile,
                userId:state.auth.userId,
                isAuth:state.auth.isAuth,
                status:state.dataPosts.status,
                photo:state.dataPosts.photo
                }    
    }

    let mapDispatchToProps = (dispatch) => {
        
    return {
                addPost: (newPost) => {
                    dispatch(AddPostActionCreate(newPost));
                }, 
                setUserProfileThunkCreate_2:(userId) => {
                    dispatch(setUserProfileThunkCreate_2(userId));
                },
                getStatusThunkCreate: (userId) => {
                    dispatch(getStatusThunkCreate(userId))
                },
                updateStatusThunkCreate: (status) => {
                    dispatch(updateStatusThunkCreate(status));
                },
                UploadPhoto: (photo) => {
                    dispatch(UploadPhoto(photo));
                }
               
            }
    }

    export default compose(connect (mapStateToProps, mapDispatchToProps),
        withAuthRedirect)(ContentContainer)
    
    

