const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialReducer = {arrayMessages : [
    { message:"Hello"},
    { message:"Bay"},
    { message:"Learn react"}
],
arrayDialogs : [
    {name:"Mikhail",id:1},
    {name:"Sergei",id:2},
    {name:"Olga",id:3},
    {name:"Anya",id:4},
    {name:"Danil",id:5},
    {name:"Vadim",id:6}

],
message:"Hi,"}

const messagesReducer = (state = initialReducer, action) => {
    
   switch (action.type ) {
       case ADD_MESSAGE:  
       let add = {
        message:state.message
        }
        let copyState = {...state};
        copyState.arrayMessages = [...state.arrayMessages];

    copyState.arrayMessages.push(add);
    
    copyState.message = "";
        return copyState;
     case UPDATE_NEW_MESSAGE: {
        let copyState = {...state};
     copyState.message = action.newText;
        return copyState;
     }
     default: return state;
    } 
}
export const AddMessegeActionCreate = () => {
    return (
        {
            type:ADD_MESSAGE
        }
    ) 
}
export const updateNewMessegeActionCreate = (text) => {
    return (
        {
            type:UPDATE_NEW_MESSAGE,
            newText:text
        }
    ) 
}
export default messagesReducer;