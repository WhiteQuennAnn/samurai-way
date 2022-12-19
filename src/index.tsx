import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {App} from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)}
             newPostText={"newPostText"}
             updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


