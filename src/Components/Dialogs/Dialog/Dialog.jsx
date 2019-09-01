 import React from 'react';
 import {NavLink} from "react-router-dom"
 import classes from "../Dialogs.module.css"
 
 const Dialog = (props) => {

              let path = "/Dialogs/" + props.id

               return (
                     <div className={classes.dialog} >
                            <NavLink to={path}>{props.name}</NavLink>
                     </div>
              )
  }

  export default Dialog