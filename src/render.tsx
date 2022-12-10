import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, updateNewPostText} from './redux/state';
import {StateType} from "./Type";


export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} newPostText={"newPostText"} updateNewPostText={ updateNewPostText}/>,
        document.getElementById('root')
    );
}



