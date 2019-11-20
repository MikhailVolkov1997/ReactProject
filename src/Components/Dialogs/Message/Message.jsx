import React from 'react';
import classes from "../Dialogs.module.css"

const Message = (props) => {

    return (
        <div>
            <div className={classes.message} >
                {props.avatar}
                {props.message}
            </div>

        </div>
    )
}

export default Message