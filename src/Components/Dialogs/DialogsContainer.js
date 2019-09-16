import React from 'react';
import Dialogs from './Dialogs';
import {AddMessegeActionCreate, updateNewMessegeActionCreate} from './../../Redux/Messeges'
import { connect } from 'react-redux';
import { compose } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';


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
        addMessage: () => {
            dispatch(AddMessegeActionCreate());
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessegeActionCreate(text));
        }
    }
}

export default compose ( connect(mapStateToProps, mapDispatchToProps))(Dialogs)

