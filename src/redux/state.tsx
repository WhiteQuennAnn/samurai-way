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

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextActionType = ReturnType<typeof updateNewPostActionCreator>

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
        postMessage: React.createRef<HTMLTextAreaElement>().current?.value
    } as const
}

export const updateNewPostActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: e.currentTarget.value
    } as const
}

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
    ) { //{ type: 'ADD-POST'}
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




