import React from 'react';
import '../Styles/Posts.css';
const Post = (props) => (
    <div className= "card">
        <div className= "card-body">
            { props.postBody }
        </div>
    </div>
);
export default Post;