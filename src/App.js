import React, { Component } from 'react';
import './App.css';
import './index.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Threads from "./Threads/Components/Threads";
import firebase from "firebase/app";
import 'firebase/database';

class App extends Component {
    constructor(props) {
        super(props);

        const config = {
            apiKey: "AIzaSyDe8FVW369D4xBwQPQ5f4p3OiJVtIdJgXI",
            authDomain: "curious-433d2.firebaseapp.com",
            databaseURL: "https://curious-433d2.firebaseio.com",
            projectId: "curious-433d2",
            storageBucket: "curious-433d2.appspot.com",
            messagingSenderId: "214772994536",
            appId: "1:214772994536:web:40a624ce648540b494d45d",
            measurementId: "G-J2SM82KBM9"

        };

        this.app = firebase.initializeApp(config);
        this.database = this.app.database();
    }
    render() {
        return (
            <Threads database={this.app.database}/>
        );
    }
}
export default App;


