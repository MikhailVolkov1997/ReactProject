import React from "react"
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC} from '../../Redux/Users'
import Users from "./Users";

 
let mapStateToProps = (state) => {
    return {
        users:state.dataUsers.arrayUsers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUser:(users) => {
            dispatch(setUsersAC(users));
        }
    }
}


let UsersContainer = connect (mapStateToProps,mapDispatchToProps) (Users);



export default UsersContainer;