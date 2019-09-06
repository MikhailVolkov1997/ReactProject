import {createStore, combineReducers} from "redux"
import messagesReducer from './Messeges'
import postReducer from "./Posts"



let reducers = combineReducers({
    dataMessages:messagesReducer,
    dataPosts:postReducer
});
let store = createStore(reducers);

export default store;