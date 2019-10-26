import React, {Component} from 'react';
import Post from "../../Posts/Components/Post";
import Posts_entry from "../../PostsEntry/Components/Posts_entry";
import firebase from "firebase";
import 'firebase/database';

class Threads extends Component {

    constructor(props){
        super(props);

        this.addPost = this.addPost.bind(this);
        this.updateLocalState = this.updateLocalState.bind(this);
        this.state = {
            posts :[],
        }
        const db = firebase.database().ref();
        this.databaseRef = db.child('post');
    }

    componentWillMount() {
        const {updateLocalState} = this;
        this.databaseRef.on('child_added', snapshot => {
            const response = snapshot.val();
            updateLocalState(response);
        } );
    }

    addPost(postBody){
        const postToSave = {postBody};
        this.databaseRef.push().set(postToSave);
    }

    updateLocalState(response){
        const posts = this.state.posts;
        const brokenDownPost = response.postBody.split(/[\r\n]/g);
         posts.push(brokenDownPost);
         this.setState({
             posts: posts,
         });
    }
    render() {
        return (
            <div>
                {
                    this.state.posts.map((postBody, idx) => {
                        return (
                            <Post key={idx} postBody={postBody}/>
                        )
                    })
                }
                <Posts_entry addPost={this.addPost}/>
            </div>
        );
    }
}

export default Threads;