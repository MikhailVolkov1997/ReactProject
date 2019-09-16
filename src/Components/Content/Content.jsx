import React from 'react';
import classes from "./Content.module.css"
import Post from "./Posts/Posts"



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
                  <div>
                      <img className={classes.imgAvatar}src={!this.props.profile || !this.props.profile.photos.small  ? 
                        "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg" 
                        : this.props.profile.photos.small}></img>  
                     
                  </div>
                  <textarea ref={this.newPostElement} onChange={this.onChangePost} value={this.props.newPostText}></textarea>
                  <button onClick={this.addPost}>Add post</button>
                      <div>
                          {this.props.post.map(post => <Post avatar={post.avatar} message={post.message}/> )}
                      </div>
                     
                </div>
          }
}

export default Content