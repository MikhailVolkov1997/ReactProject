import React from 'react';
import classes from "./Posts.module.css";

const Post = (props) => {
   
    return (
       <div className={classes.post}>
        
        <img src=  {props.avatar} />
          {props.message} 
         
       </div>
    )   
}

export default Post;

