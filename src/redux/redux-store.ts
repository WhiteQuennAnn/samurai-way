import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

let rootReducer = combineReducers(
    {
        dialogsPage: DialogsReducer,
        profilePage: ProfileReducer,
    }
);

let store = createStore(rootReducer);

export type AppStoreType = ReturnType<typeof rootReducer>;

//window.store = store;

export default store;