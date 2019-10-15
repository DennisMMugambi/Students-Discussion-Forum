import React from 'react';
import './App.css';
import './index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className = "card modal-dialog modal-xl">
        <div class = "card-body">
        <textarea className= "form-control card-input"/>
        <button className= "btn btn-danger card-button">
            Post
        </button>
        </div>
    </div>
  );
}

export default App;
