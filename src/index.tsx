import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

let postsData = [
    {id: 1, message: "Hey how are you", likesCount: 22},
    {id: 2, message: "its my first post", likesCount: 65}
]
ReactDOM.render(
    <App postsData={postsData}/>,
    document.getElementById('root')
);