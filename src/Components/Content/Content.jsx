import React from 'react';
import classes from "./Content.module.css"
import Post from "./Posts/Posts"
import {reduxForm, Field} from 'redux-form'
import { required, maxLengthActionCreator } from '../../Utills/Validators/Validate';
import { Textarea } from '../Component/Textarea';



class Content extends React.Component {
    constructor(props) {
        super(props);
        this.newPostElement = React.createRef();
    }
    addPost = (values) => {
        this.props.addPost(values.addToPost);
    }

    // onChangePost = () => { //update for each character entered
    //         let text = this.newPostElement.current.value;
    //       this.props.updateNewPost(text);
    // }

    onUploadPhoto = (event) => {
        debugger
    //   let photo = event.target...
          //  this.props.onUploadPhoto(photo);
    }
    
    
   

          render () {
    
              return  <div className={classes.content}>
              <img src="http://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg" />
                  <div>
                      <img className={classes.imgAvatar}src={!this.props.profile || !this.props.profile.photos.small  ? 
                        "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" 
                        : this.props.profile.photos.small}></img>  
                        <div><input type="file" value="upload photo" onChange = {this.onUploadPhoto}  /></div>
                  </div>
                       <AddToPostForm onSubmit={this.addPost} />
                      <div>
                          {this.props.post.map(post => <Post avatar={post.avatar} message={post.message}/> )}
                      </div>
                     
                </div>
          }
        }

        let maxLength50 = maxLengthActionCreator(50);
        
    
        const AddPostReducer = (props) => {
    return <form onSubmit = {props.handleSubmit}>
                <Field component={Textarea} name='addToPost' placeholder="new post" 
                validate = {[required, maxLength50]}
                ></Field>
                  <button type="submit">Add post</button>
            </form>
}
const AddToPostForm = reduxForm({form: "addNewPost"})(AddPostReducer)
export default Content