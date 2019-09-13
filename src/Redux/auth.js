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

export default AuthReducer;