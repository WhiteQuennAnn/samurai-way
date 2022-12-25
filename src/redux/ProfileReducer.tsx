import {OnePostTypeProps} from "../Type";
import React, {ChangeEvent} from "react";


type ProfileType = {
    postsData: OnePostTypeProps[],
    newPostText: string
}

let initialState: ProfileType = {
    postsData: [
        {id: 1, message: "Hey how are you", likesCount: 22},
        {id: 2, message: "its my first post", likesCount: 65}],
    newPostText: "Anna"
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: OnePostTypeProps = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 94
            };
            state.postsData.push(newPost)
            state.newPostText = ' ';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;

            return state;
        default:
            return state;
    }
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


