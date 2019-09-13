       import React from 'react';
       import classes from "./Dialogs.module.css"
       import Message from "./Message/Message"
       import Dialog from "./Dialog/Dialog"
       import {AddMessegeActionCreate, updateNewMessegeActionCreate} from "./../../Redux/Messeges"
       
      
      
      
      const Dialogs = (props) => {
             
              const Img = <img src = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" />
              const DialogDate = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)
              const MessageDate = props.messages.map(message => <Message avatar ={Img} message={message.message} />)
              
              let ElemntTextarea = React.createRef();  
              
              let addMessage = () => {
                  props.dispatch(AddMessegeActionCreate());
              }
             let onChangeDialogs = () => {
              let text = ElemntTextarea.current.value;
              props.dispatch(updateNewMessegeActionCreate(text));
             } 
              
       return (
              <div className={classes.dialogItem}>
                     <div className={classes.dialogs}>
                           {DialogDate}
                     </div>
                     <div className={classes.messanges} >
                            {MessageDate}
                            <div className={classes.addedMessege}>
                            <textarea ref = {ElemntTextarea} value={props.Newmessage} onChange={props.onChangeDialogs}></textarea>
                            <div>
                            <button onClick={props.addMessage}>send message</button>
                            </div>
                     </div> 
                     </div>
                       
              </div>
       )
       }

       export default Dialogs;

       