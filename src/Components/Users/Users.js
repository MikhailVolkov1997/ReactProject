import React from 'react';
import classes from './users.module.css'
import {NavLink} from "react-router-dom"




class Users extends React.Component {
    constructor(props) {
        super(props);
        this.ava = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        

        let pageArray = [];
        for  (let i = 1; i <= 10; i++) {
            pageArray.push(i);
        }

       
        return <div>

            <div>{pageArray.map(page => {
              return  <span className={this.props.currentPage ===  page && classes.active}
              onClick={(e) => {
                  this.props.onChanged(page) 
                }}>{page} </span>
            })}</div>
           
            { this.props.users.map(user => <div key={user.id}>
                
                
                     <span>
                         <NavLink to = {`/profile/${user.id}`}>
                         <img src={user.photos.small != null ? user.photos.small : this.ava }></img>
                         </NavLink>
                         <div>
                              {user.name}
                         </div>
                         <div>
                             {"user.secondName"}
                         </div>
                         <div>
                         {user.followed ? <button onClick={() => {
                          this.props.unfollowUser(user.id)
                          }}>follow</button> 
                        : <button onClick={() => {this.props.followUser(user.id)}}>unfollow</button>}
                        </div>
                     </span>
                     <span>
                         <div>
                            {user.status}
                         </div>
                     </span>
                     <span>
                         <div>{user.country}</div>
                         <div>{user.city} </div>
                     </span>
                 </div>
            
                  )
            }
        </div>
    }
}

export default Users;

