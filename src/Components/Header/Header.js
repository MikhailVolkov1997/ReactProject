import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom"

const Header = (props) => {
    return (
    <div className={classes.header}>
  
    <img src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
    <div className={classes.login}>
      
      <NavLink to = '/Login'>{props.isAuth ? "free" : "Login"  }</NavLink>
    </div>

  </div>
    )
}

export default Header




