import React, { Component } from 'react';
import './App.css';
import './index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Post from './Posts/Component/Post';

class App extends Component {

    constructor(props){
        super(props);
        this.addPost = this.addPost.bind(this);
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.state = {
            posts :[],
            newPostBody: '',
        }
    }
    addPost(){
        const newState = Object.assign({}, this.state);
        newState.posts.push(this.state.newPostBody);
        newState.newPostBody = '';
        this.setState(newState);
    }
    handleOnInputChange(ev){
        this.setState({
            newPostBody : ev.target.value
        })
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
                <div className="card">
                    <div class="card-body">
                        <div className="form-group">
                            <input type="text" className="form-control" id="usr" value={this.state.newPostBody} onChange={this.handleOnInputChange}/>
                        </div>
                        <button className="btn btn-danger card-button" onClick={this.addPost}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;


