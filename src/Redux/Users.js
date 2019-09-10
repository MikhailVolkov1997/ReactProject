const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = "CURRENT-PAGE"
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT"
const TOGLE_IS_FETCHING = 'TOGLE-IS-FETCHING'

let ava = "https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png";
let initialReducer = {
    arrayUsers:[ ],
    pageSize:5,
    totalCount:14,
    currentPage:1,
    isFetching: true
 }
  


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
                    ...state, arrayUsers: [...action.users]
                }
            case CURRENT_PAGE:
                return{
                    ...state, currentPage: action.current
                }
            case TOTAL_USERS_COUNT:
                return {
                    ...state, totalCount:action.count
                }
            case TOGLE_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            default: return state;
      }  
}


export const followAC = (userId) => {return{type:FOLLOW, userId}};
export const unfollowAC = (userId) => {return {type:UNFOLLOW, userId}};
export const setUsersAC = (users) => {return {type:SET_USERS, users}}
export const currentPageAC = (current) => {return {type:CURRENT_PAGE, current}}
export const setTotalUsersCountAC = (count) => {return {type:TOTAL_USERS_COUNT, count}}
export const togleIsFetchingAC = (isFetching) => {return {type:TOGLE_IS_FETCHING, isFetching}}
 
export default userReducer