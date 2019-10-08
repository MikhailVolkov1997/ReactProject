import react from 'react'
import postReducer, { AddPostActionCreate, deletePostActionCreate } from './Posts'

let state = { arrayPosts : [
    { id: 1,avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
    
    {id:2, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"},
    
    {id:3, avatar:"https://www.pinclipart.com/picdir/middle/133-1332476_crowd-of-users-transparent-user-icon-png-clipart.png", message:"hello react"}
] };
    

it("length of posts shoulded by incremented", () => {
    let action = AddPostActionCreate("hello react, I am cool programmer");
    
    let newState = postReducer(state, action);
    expect(newState.arrayPosts.length).toBe(4);

} ) ;
it("after execution one post is deleted", () => {
    let action = deletePostActionCreate(1);
    let newState = postReducer(state, action);
    expect(newState.arrayPosts.length).toBe(2);
});
it("if an incoorect value arrives", () => {
    let action = deletePostActionCreate(1012030);
    let newState = postReducer(state, action);
    expect(newState.arrayPosts.length).toBe(3);
});
