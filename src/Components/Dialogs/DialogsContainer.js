import React from 'react';
import Dialogs from './Dialogs';
import {AddMessegeActionCreate} from './../../Redux/Messeges'
import { connect } from 'react-redux';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogs:state.dataMessages.arrayDialogs,
        messages:state.dataMessages.arrayMessages,
        newMessage:state.dataMessages.message,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (addMessageOnDialogs) => {
            dispatch(AddMessegeActionCreate(addMessageOnDialogs));
        }
        
    }
}

export default compose ( connect(mapStateToProps, mapDispatchToProps))(Dialogs)

