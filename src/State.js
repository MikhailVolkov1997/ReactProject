

    
  //  import { statement } from "@babel/template";
        import messegesReducer from './Redux/Messeges'
        import postReducer from './Redux/Posts';


        const ADD_MESSEGE = 'ADD-MESSEGE';
        const UPDATE_NEW_MESSEGE = 'UPDATE-NEW-MESSEGE';
        const ADD_POST = 'ADD-POST';
        const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


     let store = {

         Render()  {
            console.log("changed");
        },
       
      
    
         State : {
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
        },

        getState () { 
            return this.State;
        },
    
         Subscriber  (observer) {
           this.Render = observer;
        }, 

        dispatch (action) {
            
            messegesReducer(this.State, action);
           postReducer(this.State,action);

            this.Render(this.State);
        }
    }

        export const AddPostActionCreate = () => {
            return ( {
                type:ADD_POST
            } )
        }
        export const UpdateNewPostTextActionCreate = (text) => {
            return (
                {
                    type:UPDATE_NEW_POST_TEXT,
                    newText:text
                }
            )
        }
        export const AddMessegeActionCreate = () => {
            return (
                {
                    type:ADD_MESSEGE
                }
            ) 
        }
        export const updateNewMessegeActionCreate = (text) => {
            return (
                {
                    type:UPDATE_NEW_MESSEGE,
                    newText:text
                }
            ) 
        }
    

     


        export default store
            
        

