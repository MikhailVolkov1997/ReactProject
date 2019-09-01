       import React from 'react';
       import classes from "./Dialogs.module.css"
       import Message from "./Message/Message"
       import Dialog from "./Dialog/Dialog"
       
       
    
      
      
      
      const Dialogs = (props) => {

              const DialogDate = props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)
              const MessageDate = props.messeges.map(message => <Message messege={message.message} />)
              
       return (
              <div className={classes.dialogItem}>
                     <div className={classes.dialogs}>
                           {DialogDate}
                     </div>
                     <div className={classes.messanges} >
                            {MessageDate}
                     </div>
              </div>
       )
       }

       export default Dialogs