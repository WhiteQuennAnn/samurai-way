import React from 'react';
import './index.css';
import store, {AppStoreType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import {StateType} from "./Type";
import StoreContext from "./StoreContext";

let rerenderEntireTree = () => {

    ReactDOM.render(
        <StoreContext.Provider value={store}>

            <App/>,
            document.getElementById('root')
            );
        </StoreContext.Provider>
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)





