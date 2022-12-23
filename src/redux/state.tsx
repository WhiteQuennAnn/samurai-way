import React, {ChangeEvent} from 'react';
import {OnePostTypeProps, StateType} from "../Type";

export type StoreType = {
    _state: StateType
    _onChange: () => void
    // updateNewPostText: (newText: string) => void
    // addPost: (postMessage: string) => void
    subscribe: (callback: () => void) => void
    getState: () => StateType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}


export type AddPostActionType = {
    type: 'ADD-POST'
}

export type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
let ADD_POST = 'ADD-POST';
let CHANGE_UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';

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
    _onChange() {
        console.log("state changed")
    },

    subscribe(callback) {
        this._onChange = callback; // наблюдатель
    },
    getState() {
        return this._state
    },

    // _callSubscriber() {
    //     console.log('State changed')
    // },

    // addPost(postMessage: string) {
    // const newPost: OnePostTypeProps = {
    //     id: new Date().getTime(),
    //     message: postMessage,
    //     likesCount: 94
    // };
    // this._state.profilePage.postsData.push(newPost)
    // this._state.profilePage.newPostText = ' '
    // this._onChange();
    // }
    // ,
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._onChange();
    // },

    export const addPostActionCreator = () => {
        return {
            type: ADD_POST

        }
    }

    export  const updateNewPostActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {

        return {
            type: CHANGE_UPDATE_NEW_POST,
            newText: e.currentTarget.value

        }
    }
    dispatch(action: AddPostActionType | ChangeNewTextActionType) { //{ type: 'ADD-POST'}
        debugger
        if (action.type === 'ADD-POST') {
            debugger
            const newPost: OnePostTypeProps = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 94
            };
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ' '
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._onChange();
        }
    }


}
export default store;


//window.store = store;

