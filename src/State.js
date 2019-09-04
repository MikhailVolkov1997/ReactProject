    import {Render } from "./render"
import { statement } from "@babel/template";
// import { removeListener } from "cluster";
    
    let State = {
     ArrayDialogs : [
        {name:"Mikhail",id:1},
        {name:"Sergei",id:2},
        {name:"Olga",id:3},
        {name:"Anya",id:4},
        {name:"Danil",id:5},
        {name:"Vadim",id:6}
    
    ],
     ArrayMesseges : [
        { message:"Hello"},
        { message:"Bay"},
        { message:"Learn react"}
    ],
     ArrayPosts : [
        { id: 1,avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
        
        {id:2, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
        
        {id:3, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"}

    ],
    text:"react cool",
    messege:"Hi,"
    }

    export let AddPost = (message) => {
       
       let add = {
           id:4,
           avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png",
           message:State.text
       }
       State.ArrayPosts.push(add);
       Render(State);
       State.text="";
     
    }
    export let updateNewPostText = (newText) => {
        State.text = newText;
        Render(State);
    }

    export let addMessege = (messege) => {
        let add = {
            message:State.messege
        }
        State.ArrayMesseges.push(add);
        Render(State);
        State.messege = "";
    }
    export let updateNewMessege = (newText) => {
        State.messege = newText;
        Render(State);
    }

    export default State

    