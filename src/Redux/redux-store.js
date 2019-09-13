import {createStore, combineReducers} from "redux"
import messagesReducer from './Messeges'
import postReducer from "./Posts"
import userReducer from "./Users"



let reducers = combineReducers({
    dataMessages:messagesReducer,
    dataPosts:postReducer,
    dataUsers:userReducer
});
let store = createStore(reducers);

export default store;