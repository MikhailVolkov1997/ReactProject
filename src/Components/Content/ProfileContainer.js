import React from "react"
import * as Axios from "axios"
import Profile from "../Users/Profile";
import { connect } from 'react-redux';
import {setUsersProfileAC } from "../../Redux/Posts"
import {withRouter} from 'react-router-dom'
import { getProfile } from "../../api/api";




class ProfileContainer extends React.Component {


    componentDidMount(){
        let userId = this.props.match.params.userId
        getProfile(userId).then(data => {
         this.props.setUserProfile(data);
            
         })
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
            setUserProfile:(profile) =>{
                dispatch(setUsersProfileAC(profile))
            }
        }
}

let WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps, mapDispatchToProps)(WithUrlProfileContainer);
