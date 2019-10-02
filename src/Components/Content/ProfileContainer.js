import React from "react"
import Profile from "../Users/Profile";
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setUserProfileThunkCreate, getStatusThunkCreate} from './../../Redux/Posts'
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.setUserProfileThunkCreate(userId);
        this.props.getStatusThunkCreate(userId);

    }

    render () {
        return <Profile {...this.props} />
        }
    }

    let mapStateToProps = (state) => {
        return {
                profile:state.dataPosts.profile,
                isAuth:state.auth.isAuth,
                status:state.dataPosts.status,
                userId:state.auth.userId
                }    
    }

    let mapDispatchToProps = (dispatch) => {
        
    return {
                setUserProfileThunkCreate:(userId) => {
                    dispatch(setUserProfileThunkCreate(userId));
                },
                getStatusThunkCreate: (userId) => {
                    dispatch(getStatusThunkCreate(userId))
                }
                
            }
    }

    export default compose(connect (mapStateToProps, mapDispatchToProps),
        withRouter,
        withAuthRedirect
        )(ProfileContainer)

    
