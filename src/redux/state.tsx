import React from 'react';
import {OnePostTypeProps, StateType} from "../Type";

export type StoreType = {
    _state: StateType
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
    subscribe: (callback: () => void) => void
    _onChange: ()=>void
    getState:() => StateType

}

let store: StoreType = {
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
        }
    },
    getState() {
        return this._state
    },

    // _callSubscriber() {
    //     console.log('State changed')
    // },

    addPost(postMessage: string) {
        const newPost: OnePostTypeProps = {
            id: new Date().getTime(),
            message: postMessage,
            likesCount: 94
        };
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ' '
        this._onChange();
    }
    ,
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._onChange();
    },
    _onChange() {
        console.log("state changed")
    },
    subscribe(callback) {
        this._onChange = callback; // наблюдатель
    }
}
 export default store;


//window.store = store;

