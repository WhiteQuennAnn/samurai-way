import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {App} from "./App";
import {StateType} from "./Type";

let rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)}
             newPostText={"newPostText"}
             updateNewPostText={store.updateNewPostText.bind(store)} store={store}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());




