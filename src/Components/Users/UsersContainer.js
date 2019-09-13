import React from "react"
import { connect } from 'react-redux';
import {followAC, unfollowAC, setUsersAC, currentPageAC, setTotalUsersCountAC, togleIsFetchingAC} from '../../Redux/Users'
import Users from "./Users";
import  * as Axios from 'axios';
import preloader from './../Ellips.svg'
import classes from './users.module.css'
import { getUsers } from "../../api/api";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

   
    
    componentDidMount() {
            {this.props.togleIsFetching(true)}
            getUsers(this.props.currentPage, this.props.pageSize).then(data => {
               {this.props.togleIsFetching(false)}
            this.props.setUser(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onChanged = (page) => {
        {this.props.togleIsFetching(true)}
        this.props.setCurrentPage(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,{withCredentials:true}).then(response => {
                this.props.setUser(response.data.items);
                {this.props.togleIsFetching(false)}
            })
    }
    render() {

        

        
           return <> 
                {this.props.isFetching ? <img className={classes.preloader} src={preloader} /> : null}
           <Users  componentDidMount = {this.componentDidMount}
                onChanged={this.onChanged}
                users={this.props.users}
                currentPage={this.props.currentPage}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                isFetching={this.props.isFetching}
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
        isFetching: state.dataUsers.isFetching
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
        }

    }
}


export default connect (mapStateToProps,mapDispatchToProps) (UsersContainer);



