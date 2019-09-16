       import React from 'react';
       import classes from "./Dialogs.module.css"
       import Message from "./Message/Message"
       import Dialog from "./Dialog/Dialog"
       import {Redirect} from 'react-router-dom'
       
    
       class Dialogs extends React.Component {
              constructor(props){
                     super(props);
                     this.Img =  <img src = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" />;
                     this.ElemntTextarea = React.createRef(); 
              }

              addMessage = () => {
                     this.props.addMessage();
              }
              onChangeDialogs = () => {
                     let text = this.ElemntTextarea.current.value;
                            this.props.updateNewMessage(text);
                    }

              render() {
                     if (this.props.isAuth === false ) return <Redirect to="/login" />

                     return (
                            <div className={classes.dialogItem}>
                                   <div className={classes.dialogs}>
                                         {this.props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)}
                                   </div>
                                   <div className={classes.messanges} >
                                          { this.props.messages.map(message => <Message avatar ={this.Img} message={message.message} />)}
                                          <div className={classes.addedMessege}>
                                          <textarea ref = {this.ElemntTextarea} value={this.props.newMessage} onChange={this.onChangeDialogs}></textarea>
                                          <div>
                                          <button onClick={this.addMessage}>send message</button>
                                          </div>
                                   </div> 
                                   </div>
                                     
                            </div>
                     )
              }
       }

       export default Dialogs;

       