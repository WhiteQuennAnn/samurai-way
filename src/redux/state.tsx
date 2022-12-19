import React from 'react';
import {OnePostTypeProps} from "../Type";

let store = {
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
        return _state;
    },

    rerenderEntireTree() {
        console.log("State is changed")
    },
    addPost(postMessage: string) {
        const newPost: OnePostTypeProps = {
            id: new Date().getTime(),
            message: postMessage,
            likesCount: 94
        };
        state.profilePage.postsData.push(newPost)
        state.profilePage.newPostText = ' '
        rerenderEntireTree();
    },
    updateNewPostText(newText: string) {
        state.profilePage.newPostText = newText;
        rerenderEntireTree();
    },
    subscribe(observer: () => void) {
        rerenderEntireTree = observer; // наблюдатель
    }
}


export default store;
// window.store = store;