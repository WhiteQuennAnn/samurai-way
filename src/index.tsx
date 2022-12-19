import React from 'react';
import './index.css';
import store from "./redux/state";

import {StateType} from "./Type";
import ReactDOM from "react-dom";
import {App} from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store._state} addPost={store.addPost} newPostText={"newPostText"} updateNewPostText={store.updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);


