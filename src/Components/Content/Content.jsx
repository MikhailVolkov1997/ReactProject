import React from 'react';
import classes from "./Content.module.css"
import Post from "./Posts/Posts"
import { newExpression } from '@babel/types';



/* const Content = (props) => {
    
    let newPostElement = React.createRef();

   let addPost = () => {
      props.addPost();
     
     
   }
    let onChangePost = () => {
        let text = newPostElement.current.value;
      props.updateNewPost(text);
        
    }

    const PostDate = props.post.map(post => <Post avatar={post.avatar} message={post.message}/> )
        return (
            <div className={classes.content}>
                <img src="http://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg" />
                    <textarea ref={newPostElement} onChange={onChangePost} value={props. newPostText}></textarea>
                    <button onClick={addPost}>Add post</button>
                        <div>
                            {PostDate}
                        </div>
            </div>
      
    )
} */

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.newPostElement = React.createRef();
    }
    addPost = () => {
        this.props.addPost();
    }

    onChangePost = () => {
            let text = this.newPostElement.current.value;
          this.props.updateNewPost(text);
    }
    
    
   

          render () {
            
              return  <div className={classes.content}>
              <img src="http://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg" />
                  <textarea ref={this.newPostElement} onChange={this.onChangePost} value={this.props.newPostText}></textarea>
                  <button onClick={this.addPost}>Add post</button>
                      <div>
                          {this.props.post.map(post => <Post avatar={post.avatar} message={post.message}/> )}
                      </div>
                </div>
          }
}

export default Content