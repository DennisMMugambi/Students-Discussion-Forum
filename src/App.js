import React, { Component } from 'react';
import './App.css';
import './index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Threads from "./Threads/Components/Threads";
class App extends Component {
    
    render() {
        return (
            <Threads/>
        );
    }
}
export default App;


