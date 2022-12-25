import React from 'react';
import './index.css';
import store, {AppStoreType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import {StateType} from "./Type";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store}
        />,
        document.getElementById('root')
    );
}

// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })
rerenderEntireTree()
store.subscribe(rerenderEntireTree)





