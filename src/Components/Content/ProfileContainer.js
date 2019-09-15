import React from "react"
import * as Axios from "axios"
import Profile from "../Users/Profile";
import { connect } from 'react-redux';
import {setUsersProfileAC } from "../../Redux/Posts"
import {withRouter} from 'react-router-dom';
import {setUserProfileThunkCreate} from './../../Redux/Posts'





class ProfileContainer extends React.Component {


    componentDidMount(){
        let userId = this.props.match.params.userId
        this.props.setUserProfileThunkCreate(userId);
    }

    render () {
        return <Profile {...this.props} />
        }
    }

    let mapStateToProps = (state) => {
        return {
                profile:state.dataPosts.profile
                }    
    }

    let mapDispatchToProps = (dispatch) => {
        
    return {
                setUserProfileThunkCreate:(userId) => {
                    dispatch(setUserProfileThunkCreate(userId));
                }
            }
    }

    let WithUrlProfileContainer = withRouter(ProfileContainer)

    export default connect (mapStateToProps, mapDispatchToProps)(WithUrlProfileContainer);
