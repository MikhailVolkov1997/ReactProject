import React from 'react';
import classes from './users.module.css'

let Users = (props) => {
    let ava = "https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png";

    if (props.users.length === 0) {
   props.setUser ([
    {id:1, followed:true, avatar: ava, firstName:"Mikhail", secondName:"Volkov", status:"love js", country:"Ukraine", city:"Kharkiv"},
    {id:2, followed:false, avatar: ava,  firstName:"Mikhail", secondName:"Volkov", status:"love js", country:"Great Britain", city:"London"},
    {id:3, followed:true, avatar: ava,  firstName:"Mikhail", secondName:"Volkov", status:"love js", country:"Russia", city:"Moscow"},
    {id:4, followed:true, avatar: ava,  firstName:"Mikhail", secondName:"Volkov", status:"love js", country:"Ukraine", city:"Kiev"}
    ])
    }
    return <div>
        
            { props.users.map(user => <div key={user.id}>
                
                     <span>
                         <img src={user.avatar}></img>
                         <div>
                              {user.firstName}
                         </div>
                         <div>
                             {user.secondName}
                         </div>
                         <div>
                         {user.followed ? <button onClick={() => {props.unfollowUser(user.id)}}>follow</button> 
                        : <button onClick={() => {props.followUser(user.id)}}>unfollow</button>}
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
    
            }

        </div>
    
}

export default Users;