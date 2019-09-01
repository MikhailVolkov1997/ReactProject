import React from 'react';
import classes from "./Content.module.css"
import Post from "./Posts/Posts"


const Content = (props) => {

    const PostDate = props.post.map(post => <Post avatar={post.avatar} message={post.message}/> )
    return (
      <div className={classes.content}>
          <img src="http://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg" />
              <textarea></textarea>
                 <button>Add post</button>
                    <div>
                        {PostDate}
                    </div>
      </div>
      
    )
}

export default Content