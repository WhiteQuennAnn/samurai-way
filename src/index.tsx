import React from 'react';
import './index.css';
import store, {AppStoreType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import {StateType} from "./Type";

let rerenderEntireTree = (store: AppStoreType) => {
    ReactDOM.render(
        <App store={store}

        />,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})





