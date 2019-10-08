    import { getAuth, Login, Logout } from "../api/api";
    import {stopSubmit} from 'redux-form'

    let SET_USER_DATA = 'auth/SET-USER-DATA'

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
                        ...action.data
                    } 
                    default: return state;
            }
    }

    export const setUserDataAC = (userId, email, login, isAuth) => {

        return {type:SET_USER_DATA,  data:{userId, email, login, isAuth}}

    }

    export const getAuthThunkCreator = () =>  async (dispatch) => {
            let data =  await getAuth();                           // returned promise
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setUserDataAC(id, email, login, true)); 
                }
        }       


    export const login = (email, password, rememberMe) => {
        return async (dispatch) => {
            let response = await Login(email, password,rememberMe)
                if (response.data.resultCode === 0) {
                    dispatch(getAuthThunkCreator())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                    let action = stopSubmit('login', {_error:message});
                    dispatch(action);
                }       
        }
    }

    export const logout = () => {
        return async (dispatch) => {
        let response = await Logout();
                if(response.data.resultCode === 0){
                    dispatch(setUserDataAC(null, null, null, false))
            }
        }
    }
    export default AuthReducer;