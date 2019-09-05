import {createStore, combineReducers} from "redux"
import messegesReducer from './Messeges'
import postReducer from "./Posts"



let reducers = combineReducers({
    ArrayMesseges:messegesReducer,
    ArrayPosts:postReducer
});
let store = createStore(reducers);

export default store;