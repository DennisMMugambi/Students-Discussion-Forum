import React from 'react';
import './App.css';
import './index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
      <div>
      <div className= "card">
          <div className= "card-body">
              Hello i'm a post.
          </div>
      </div>
    <div className = "card">
        <div class = "card-body">
            <div className="form-group">
                <label htmlFor="usr">Name:</label>
                <input type="text" className="form-control" id="usr"/>
            </div>
        <button className= "btn btn-danger card-button">
            Post
        </button>
        </div>
    </div>
      </div>
  );
}

export default App;
