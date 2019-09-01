import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

let ArrayDialogs = [
    {name:"Mikhail",id:1},
    {name:"Sergei",id:2},
    {name:"Olga",id:3},
    {name:"Anya",id:4},
    {name:"Danil",id:5},
    {name:"Vadim",id:6}
  
  ]
  let ArrayMesseges = [
    { message:"Hello"},
    { message:"Bay"},
    { message:"Learn react"}
  ]
  const ArrayPosts = [
    {avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
    
    {avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
    
    {avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"}
]
    


ReactDOM.render(<App dialogs={ArrayDialogs} message={ArrayMesseges} post={ArrayPosts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


