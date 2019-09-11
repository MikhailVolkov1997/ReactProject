import React from "react"
import * as Axios from "axios"
import Profile from "../Users/Profile";
import { connect } from 'react-redux';
import {setUsersProfileAC } from "../../Redux/Posts"
import {withRouter} from 'react-router-dom'




class ProfileContainer extends React.Component {


    componentDidMount(){
        let userId = this.props.match.params.userId
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
         this.props.setUserProfile(response.data);
            
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
