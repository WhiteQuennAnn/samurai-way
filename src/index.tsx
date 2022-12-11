import React from 'react';
import './index.css';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";

import {StateType} from "./Type";
import ReactDOM from "react-dom";
import {App} from "./App";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} newPostText={"newPostText"} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);


