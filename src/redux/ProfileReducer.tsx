import {OnePostTypeProps} from "../Type";
import React, {ChangeEvent} from "react";

export const ProfileReducer = (state, action) => {
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


