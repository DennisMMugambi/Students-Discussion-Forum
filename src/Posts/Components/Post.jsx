import React from 'react';
import '../Styles/Posts.css';
const Post = (props) => (
    <div className= "card">
        <div className= "card-body">
            {
                props.postBody.map((postPart, idx) => (
                <div>{postPart}</div>
                ))
            }
        </div>
    </div>
);
export default Post;