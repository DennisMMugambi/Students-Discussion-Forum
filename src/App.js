import React, { Component } from 'react';
import './App.css';
import './index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Post from './Posts/Component/Post';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            posts : [
                "Hello World!!"
            ],
        }
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
                            <input type="text" className="form-control" id="usr"/>
                        </div>
                        <button className="btn btn-danger card-button">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;


