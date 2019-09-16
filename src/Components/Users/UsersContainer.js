import React from "react"
import { connect } from 'react-redux';
import {followAC, 
        unfollowAC, 
        setUsersAC, 
        currentPageAC, 
        setTotalUsersCountAC, 
        togleIsFetchingAC, 
        togleIsFollowingProgressAC,
        getUsersThunkCreator,
        onChangedThunkCreator,
        unfollowUserThunkCreator,
        followUserThunkCreator} from '../../Redux/Users'
import Users from "./Users";
import preloader from './../Ellips.svg'
import classes from './users.module.css'
import { getUsers } from "../../api/api";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
            this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
    }

    onChanged = (page) => {
        this.props.onChangedThunkCreator(page, this.props.pageSize);
    }
    render() {

           return <> 
                {this.props.isFetching ? <img className={classes.preloader} src={preloader} /> : null}
           <Users  componentDidMount = {this.componentDidMount}
                onChanged={this.onChanged}
                {...this.props}
                /> 
                </>
       
    
}
}
 
let mapStateToProps = (state) => {
    return {
        users:state.dataUsers.arrayUsers,
        totalCount:state.dataUsers.totalCount,
        pageSize:state.dataUsers.pageSize,
        currentPage:state.dataUsers.currentPage,
        isFetching: state.dataUsers.isFetching,
        togleIsFollowingProgress:state.dataUsers.togleIsFollowingProgress
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
        },
        setCurrentPage:(current) => {
            dispatch(currentPageAC(current));
        },
        setTotalUsersCount:(count) => {
            dispatch(setTotalUsersCountAC(count));
        },
        togleIsFetching:(isFetching) => {
            dispatch(togleIsFetchingAC(isFetching))
        },
        isFollowingProgress:(isFetching, userId) => {
            dispatch(togleIsFollowingProgressAC(isFetching, userId))
        },
        getUsersThunkCreator:(currentPage, pageSize) => {
            dispatch(getUsersThunkCreator(currentPage, pageSize))
        },
        onChangedThunkCreator:(page, pageSize) => {
            dispatch(onChangedThunkCreator(page, pageSize))
        },
        unfollowUserThunkCreator: (userId) => {
            dispatch(unfollowUserThunkCreator(userId));
        },
        followUserThunkCreator: (userId) => {
            dispatch(followUserThunkCreator(userId))
        }
 
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (UsersContainer);


