import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

let reducers = combineReducers(
    {
        dialogsPage: DialogsReducer,
        profilePage: ProfileReducer,
    }
);

let store = createStore(reducers);

export type AppStoreType = typeof store;

window.store = store;

export default store;