import React from "react"
import Profile from "../Users/Profile";
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setUserProfileThunkCreate} from './../../Redux/Posts'
import { withAuthRedirect } from "../Hoc/withAuthRedirect";
import { compose } from "../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";

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
                profile:state.dataPosts.profile,
                isAuth:state.auth.isAuth
                }    
    }

    let mapDispatchToProps = (dispatch) => {
        
    return {
                setUserProfileThunkCreate:(userId) => {
                    dispatch(setUserProfileThunkCreate(userId));
                }
            }
    }

    export default compose(connect (mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
    )(ProfileContainer)

    
