import React, {ChangeEvent} from 'react';
import {OnePostTypeProps, StateType} from "../Type";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

export type StoreType = {
    _state: StateType
    _onChange: () => void
    // updateNewPostText: (newText: string) => void
    // addPost: (postMessage: string) => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextActionType = ReturnType<typeof updateNewPostActionCreator>




export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hey how are you", likesCount: 22},
                {id: 2, message: "its my first post", likesCount: 65}],
            newPostText: "Anna"
        },
        dialogsPage: {
            messageItemData: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Pike"},
                {id: 3, message: "Buy"}
            ],
            dialogsData: [
                {id: 1, name: "Anya"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Igor"}
            ],
            newMessageBody: ""
        }
    },
    _onChange() {
        console.log("state changed")
    },

    subscribe(callback) {
        this._onChange = callback; // наблюдатель
    },
    getState() {
        return this._state
    },
    dispatch(action:
                 AddPostActionType | ChangeNewTextActionType
    ) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._onChange();
    }
}
export default store;





