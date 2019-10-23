import React, {Component} from 'react';
import '../Styles/PostsEntry.css';

class Posts_entry extends Component{
    constructor(props) {
        super(props);

        this.state = {
            newPostBody :'',
        };
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }
    handleOnInputChange(ev){
        this.setState({
            newPostBody : ev.target.value
        })
    }
    createPost(){
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody : '',
        })
    }//40:11
render() {
        return(
            <div className="card">
                <div class="card-body">
                    <div className="form-group">
                        <input type="text" className="form-control" id="usr" value={this.state.newPostBody} onChange={this.handleOnInputChange}/>
                    </div>
                    <button className="btn btn-danger card-button" onClick={this.createPost}>
                        Post
                    </button>
                </div>
            </div>
        )
}
}

export default Posts_entry;