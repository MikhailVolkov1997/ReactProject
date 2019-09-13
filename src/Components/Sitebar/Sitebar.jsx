import React from 'react';
import classes from "./Sitebar.module.css";
import {NavLink} from "react-router-dom"

const Sitebar = () => {
    return (
        <div className={classes.sitebar}>
        <NavLink to="/Content" activeClassName={classes.active}>Profile</NavLink>
        <NavLink to="/Dialogs" activeClassName={classes.active}>Message</NavLink>
        <NavLink to="/Users" activeClassName={classes.active}>Users</NavLink> 
        <a>News</a>
        <a>Music</a>
        <a>Video</a>
        <a>Settings</a>
        <a className={classes.friends}>Friends
        <div>
        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" />
        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" />
        <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" />
        </div>
        </a>
      </div>
    )
}

export default Sitebar