import React from 'react';
import classes from "./Sitebar.module.css";
import {NavLink} from "react-router-dom"

const Sitebar = () => {
    return (
        <div className={classes.sitebar}>
        <NavLink to="/Content" activeClassName={classes.active}>Profile</NavLink>
        <NavLink to="/Dialogs" activeClassName={classes.active}>Message</NavLink>
        <a>News</a>
        <a>Music</a>
        <a>Video</a>
        <a>Settings</a>
      </div>
    )
}

export default Sitebar