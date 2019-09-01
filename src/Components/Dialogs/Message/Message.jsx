import React from 'react';
import classes from "../Dialogs.module.css"

const Message = (props) => {

    return (
           <div className={classes.message} >
                  {props.avatar}
                  {props.messege}
                  
           </div>

    )
}

export default Message