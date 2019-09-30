import {createStore, combineReducers, applyMiddleware} from "redux"
import messagesReducer from './Messeges'
import postReducer from "./Posts"
import userReducer from "./Users"
import AuthReducer from "./auth";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form"
import AppReducer from "./app-reducer";



let reducers = combineReducers({
    dataMessages:messagesReducer,
    dataPosts:postReducer,
    dataUsers:userReducer,
    auth:AuthReducer,
    form:formReducer,
    app:AppReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;