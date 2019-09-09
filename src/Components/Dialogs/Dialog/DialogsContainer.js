    import React from 'react';
    import classes from "./Dialogs.module.css"
    import Message from "./Message/Message"
    import Dialog from "./Dialog/Dialog"
    import {AddMessegeActionCreate, updateNewMessegeActionCreate} from "./../../Redux/Messeges"
    import Dialogs from '../Dialogs';



    let dialogsContainer = (props) => {

        
              
              
              let addMessage = () => {
                  props.dispatch(AddMessegeActionCreate());
              }
             let onChangeDialogs = () => {
              let text = ElemntTextarea.current.value;
              props.dispatch(updateNewMessegeActionCreate(text));
             } 
            
            return (
                <Dialogs />
            )
    }