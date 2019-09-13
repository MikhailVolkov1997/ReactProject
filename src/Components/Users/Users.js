import React from 'react';
import classes from './users.module.css'
import  * as Axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.ava = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
    }

   
    
    componentDidMount() {
        
            Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUser(response.data.items);
            }) 

    }
    render() {
        return <div>
           
            { this.props.users.map(user => <div key={user.id}>
                
                
                     <span>
                         <img src={user.photos.small != null ? user.photos.small : this.ava }></img>
                         <div>
                              {user.name}
                         </div>
                         <div>
                             {"user.secondName"}
                         </div>
                         <div>
                         {user.followed ? <button onClick={() => {this.props.unfollowUser(user.id)}}>follow</button> 
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