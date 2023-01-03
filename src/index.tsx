import React from 'react';
import './index.css';
import store, {AppStoreType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import {StateType} from "./Type";
import StoreContext, {Provider} from "./StoreContext";

let rerenderEntireTree = () => {

    ReactDOM.render(
        <Provider store={store}>

            <App/>, document.getElementById('root')
            );
        </Provider>;
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)





