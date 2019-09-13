import React from 'react';
import Dialogs from './Dialogs';
import {AddMessegeActionCreate, updateNewMessegeActionCreate} from './../../Redux/Messeges'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogs:state.dataMessages.arrayDialogs,
        messages:state.dataMessages.arrayMessages,
        newMessage:state.dataMessages.message
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(AddMessegeActionCreate());
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessegeActionCreate(text));
        }
    }
}

let DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer