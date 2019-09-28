       import React from 'react';
       import classes from "./Dialogs.module.css"
       import Message from "./Message/Message"
       import Dialog from "./Dialog/Dialog"
       import {Redirect} from 'react-router-dom'
       import {Field, reduxForm} from 'redux-form';
       import { required, maxLengthActionCreator } from '../../Utills/Validators/Validate';
       import { Textarea } from '../Component/Textarea';
       
    
       class Dialogs extends React.Component {
              constructor(props){
                     super(props);
                     this.Img =  <img src = "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" />;
                     this.ElemntTextarea = React.createRef(); 
              }

              // onChangeDialogs = () => { //update state textarea
              //        let text = this.ElemntTextarea.current.value;
              //               this.props.updateNewMessage(text);
              //       }
              
              addMessage = (values) => {
                     this.props.addMessage(values.addMessageOnDialogs);
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
                                          <AddMessageFormRedux onSubmit={this.addMessage}/> 
                                   </div>
                                     
                            </div>
                     )
              }
       }
              
       let maxLength100 = maxLengthActionCreator(100);

       const AddMessageForm = (props) => {
              return ( <form onSubmit={props.handleSubmit}>
                     <div className={classes.addedMessege} >
                            <Field component={Textarea} placeholder='Enter to text' name='addMessageOnDialogs'
                             validate = {[required, maxLength100]}
                            />
                            <div>
                                   <button type="submit" >send message</button>
                            </div>
                     </div>
                     </form>
              )
       }


       const AddMessageFormRedux = reduxForm({form: "dialodAddMessageForm"})(AddMessageForm)
       export default Dialogs;

       