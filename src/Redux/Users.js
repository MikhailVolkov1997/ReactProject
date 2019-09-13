const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
let ava = "https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png";
let initialReducer = {arrayUsers:[ ] }
  /*  {id:1, followed:true, avatar: ava, firstName:"Mikhail", secondName:"Volkov", status:"love js", country:"Ukraine", city:"Kharkiv"},
    {id:2, followed:false, avatar: ava,  firstName:"Mikhail", secondName:"Volkov", status:"love js", country:"Great Britain", city:"London"},
    {id:3, followed:true, avatar: ava,  firstName:"Mikhail", secondName:"Volkov", status:"love js", country:"Russia", city:"Moscow"},
    {id:4, followed:true, avatar: ava,  firstName:"Mikhail", secondName:"Volkov", status:"love js", country:"Ukraine", city:"Kiev"}
    ]
};*/

const userReducer = (state = initialReducer, action) => {
   
      switch (action.type) {
          case FOLLOW: 
            return { ...state,
            arrayUsers:state.arrayUsers.map(user => {
                if (user.id === action.userId) {
                     return {...user, followed:true};
                } 
                        return user;
            })
        }
            case UNFOLLOW: 
            return {...state,
            arrayUsers:state.arrayUsers.map(user => {
                if (user.id === action.userId) {
                    return {...user,
                    followed:false};
                }
                return user;
            })}
            case SET_USERS:
                return {
                    ...state, arrayUsers: [...action.users, ...action.users]
                }
            default: return state;
      }  
}


export const followAC = (userId) => {return{type:FOLLOW, userId}};
export const unfollowAC = (userId) => {return {type:UNFOLLOW, userId}};
export const setUsersAC = (users) => {return {type:SET_USERS, users}}
 
export default userReducer