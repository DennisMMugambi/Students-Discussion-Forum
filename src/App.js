import React, { Component } from 'react';
import './App.css';
import './index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Post from './Posts/Components/Post';
import Posts_entry from "./PostsEntry/Components/Posts_entry";

class App extends Component {

    constructor(props){
        super(props);
        this.addPost = this.addPost.bind(this);
        this.state = {
            posts :[],
        }
    }
    addPost(newPostBody){
        const newState = Object.assign({}, this.state);
        newState.posts.push(newPostBody);
        this.setState(newState);
    }
    render() {
        return (
            <div>
                {
                    this.state.posts.map ((postBody, idx) => {
                        return (
                            <Post key={idx} postBody={postBody}/>
                        )
                })
                }
                <Posts_entry addPost = {this.addPost}/>
            </div>
        );
    }
}
export default App;


