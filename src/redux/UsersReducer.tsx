import React from "react";

let initialState = {
    users: [
        {id: 1, message: "Hey how are you", likesCount: 22},
        {id: 2, message: "its my first post", likesCount: 65}],
    newPostText: "Anna"
}
export type initialStateType = typeof initialState

export const UsersReducer = (state = initialState, action: AddPostActionType | ChangeNewTextActionType): initialStateType => {
    switch (action.type) {

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


