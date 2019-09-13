import {createStore, combineReducers} from "redux"
import messagesReducer from './Messeges'
import postReducer from "./Posts"
import userReducer from "./Users"
import AuthReducer from "./auth";



let reducers = combineReducers({
    dataMessages:messagesReducer,
    dataPosts:postReducer,
    dataUsers:userReducer,
    auth:AuthReducer
});
let store = createStore(reducers);

window.store = store

export default store;