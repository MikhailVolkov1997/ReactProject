import React from 'react';
import Content from "./Content"
import {AddPostActionCreate, UpdateNewPostTextActionCreate, setUsersProfileAC, setUserProfileThunkCreate_2 } from "../../Redux/Posts"
import { connect } from 'react-redux';
import {withAuthRedirect} from '../Hoc/withAuthRedirect';
import { compose } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import StatusComponent from './StatusComponent';



class ContentContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount () {
       setUserProfileThunkCreate_2(this.props.userId);
    }

    render() {
       
        return  <>
        <StatusComponent />
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
                isAuth:state.auth.isAuth
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
                setUserProfileThunkCreate_2:(userId) => {
                    dispatch(setUserProfileThunkCreate_2(userId));
                }
            }
    }

    export default compose(connect (mapStateToProps, mapDispatchToProps),
        withAuthRedirect)(ContentContainer)
    
    

