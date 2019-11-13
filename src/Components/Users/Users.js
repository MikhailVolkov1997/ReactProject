import React from 'react';
import classes from './users.module.css'
import {NavLink} from "react-router-dom"

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.ava = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg";
        this.state = {
            portionNumber:1
        }
    }
    cheker = (e) => {
        return  e.target.textContent === "next" ? 
        +1 : -1
    }

    setPortionNumber = (e) => {
        this.setState( {
            portionNumber : this.state.portionNumber + this.cheker(e)
        })
    }

    render() {
        
        let pageCount = Math.ceil(this.props.totalCount/this.props.pageSize); //count pages 

        let pageArray = [];
        for  (let i = 1; i <= pageCount; i++) {
            pageArray.push(i);
        }
        let numberPage = Math.ceil(pageCount/10);
        let leftPortionPageNumber = (this.state.portionNumber - 1) * numberPage + 1; 
        let rightPortionPageNumber = this.state.portionNumber * numberPage; 
        
        return <div>
            
            {this.state.portionNumber > 1 && <button onClick={this.setPortionNumber}>prev</button>}

            <div> {
                pageArray.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(page => {
                return  <span className={this.props.currentPage ===  page && classes.active}
              onClick={(e) => {
                  this.props.onChanged(page) 
                }}>{page} </span> })}
            </div>
            {this.state.portionNumber <= numberPage  && <button onClick={this.setPortionNumber}>next</button>}
            { this.props.users.map(user => <div key={user.id}>
                
                
                     <span>
                         <NavLink to = {`/profile/${user.id}`}>
                         <img src={user.photos.small != null ? user.photos.small : this.ava }></img>
                         </NavLink>
                         <div>
                              {user.name}
                         </div>
                         
                         <div>
                         {user.followed ? <button disabled ={this.props.togleIsFollowingProgress.some(id => id === user.id)}
                            onClick={() => {
                                this.props.unfollowUserThunkCreator(user.id);
                            }}>unfollow</button> 
                        : <button disabled ={this.props.togleIsFollowingProgress.some(id => id === user.id)}
                         onClick={() => {
                                this.props.followUserThunkCreator(user.id);
                            }}>follow</button>}
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

