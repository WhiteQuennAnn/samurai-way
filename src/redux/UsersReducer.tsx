import React from "react";

let initialState = {
    users: [
        {id: 1, fullName: "Igor", status: 'I am boss', location: { city: 'Minsk', country: 'Belarus'}},
        {id: 1, fullName: "Sasha", status: 'I am teacher', location: { city: 'Madrid', country: 'Spane'}},
        {id: 1, fullName: "Dima", status: 'I am doctor', location: { city: 'Rome', country: 'Italy'}},
            ],

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


