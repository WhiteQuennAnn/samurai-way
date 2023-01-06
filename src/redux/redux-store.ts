import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {UsersReducer} from "./UsersReducer";

let rootReducer = combineReducers(
    {
        dialogsPage: DialogsReducer,
        profilePage: ProfileReducer,
        usersPage: UsersReducer,
    }
);

let store = createStore(rootReducer);

export type AppStoreType = ReturnType<typeof rootReducer>;

//window.store = store;

export default store;