import { getAuth } from "../api/api";

let SET_USER_DATA = 'SET-USER-DATA'

let InitialReducer = {
    userId:null ,
    email:null ,
    login:null , 
    isAuth: false
}

let AuthReducer = (state = InitialReducer, action) => {
   
        switch(action.type) {
            case SET_USER_DATA:
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                } 
                default: return state;
        }
}

export const setUserDataAC = (userId, email, login) =>{

    return {type:SET_USER_DATA,  data:{userId, email, login}}

}

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserDataAC(id, email, login));
            }
    
        
     })        
    }
}
export default AuthReducer;