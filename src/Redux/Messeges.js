const ADD_MESSEGE = 'ADD-MESSEGE';
const UPDATE_NEW_MESSEGE = 'UPDATE-NEW-MESSEGE';

let initialReducer = {ArrayMesseges : [
    { message:"Hello"},
    { message:"Bay"},
    { message:"Learn react"}
],
ArrayDialogs : [
    {name:"Mikhail",id:1},
    {name:"Sergei",id:2},
    {name:"Olga",id:3},
    {name:"Anya",id:4},
    {name:"Danil",id:5},
    {name:"Vadim",id:6}

],
messege:"Hi,"}

const messegesReducer = (state = initialReducer, action) => {
   switch (action.type ) {
       case ADD_MESSEGE:  
       let add = {
        message:state.messege
        }
    state.ArrayMesseges.push(add);
    
    state.messege = "";
        return state;
     case UPDATE_NEW_MESSEGE: 
     state.messege = action.newText;
        return state;
     default: return state;
    } 
}
export const AddMessegeActionCreate = () => {
    return (
        {
            type:ADD_MESSEGE
        }
    ) 
}
export const updateNewMessegeActionCreate = (text) => {
    return (
        {
            type:UPDATE_NEW_MESSEGE,
            newText:text
        }
    ) 
}
export default messegesReducer;