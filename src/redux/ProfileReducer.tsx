import {OnePostTypeProps} from "../Type";
import React from "react";

export type ProfileType = {
    postsData: OnePostTypeProps[],
    newPostText: string
}

let initialState: ProfileType = {
    postsData: [
        {id: 1, message: "Hey how are you", likesCount: 22},
        {id: 2, message: "its my first post", likesCount: 65}],
    newPostText: "Anna"
}
export type initialStateType = typeof initialState

export const ProfileReducer = (state = initialState, action: AddPostActionType | ChangeNewTextActionType): initialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: OnePostTypeProps = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 94
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ' '
            };
        }

        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state, newPostText: action.newText
            };

        }
        default:
            return state;
    }
}
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeNewTextActionType = ReturnType<typeof updateNewPostActionCreator>

export const addPostActionCreator = () => {
    debugger
    return {
        type: 'ADD-POST',
        postMessage: React.createRef<HTMLTextAreaElement>().current?.value
    } as const
}

export const updateNewPostActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}


