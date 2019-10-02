import { getAuthThunkCreator } from "./auth";

let INITIALIZED_SUCCES = 'INITIALIZED-SUCCES'

let InitialReducer = {
    initialazed:false 
}

let AppReducer = (state = InitialReducer, action) => {
   
        switch(action.type) {
            case INITIALIZED_SUCCES:
                return {
                    ...state,
                    initialazed:true
                    
                } 
                default: return state;
        }
}
export const initializedSucces = () => {
    return {
        type:INITIALIZED_SUCCES
    }
}
export const initializeThunkCreator = () => {
    
    return (dispatch) => {
       let promise =  dispatch(getAuthThunkCreator());
       Promise.all([promise])
       .then(() => {
           dispatch(initializedSucces());
       });

    }
}

export default AppReducer;