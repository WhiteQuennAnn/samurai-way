import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import state from './redux/state';

// let dialogsData = [
//     {id: 1, name: "Anya"},
//     {id: 2, name: "Dima"},
//     {id: 3, name: "Igor"}
// ]
//
// let messageItemData = [
//     {id: 1, message: "Hello"},
//     {id: 2, message: "Pike"},
//     {id: 3, message: "Buy"}
// ]
//
// let postsData = [
//     {id: 1, message: "Hey how are you", likesCount: 22},
//     {id: 2, message: "its my first post", likesCount: 65}
]
ReactDOM.render(
    <App postsData={postsData} dialogsData={dialogsData} messageItemData={messageItemData}/>,
    document.getElementById('root')
);