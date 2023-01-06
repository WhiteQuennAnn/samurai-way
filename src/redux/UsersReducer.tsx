import React from "react";

const FOLLOW = 'FOLLOW';

const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: "Igor", status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
        {
            id: 2,
            followed: true,
            fullName: "Sasha",
            status: 'I am teacher',
            location: {city: 'Madrid', country: 'Spane'}
        },
        {id: 3, followed: false, fullName: "Dima", status: 'I am doctor', location: {city: 'Rome', country: 'Italy'}},
    ],

}
export type initialStateType = typeof initialState

export const UsersReducer = (state = initialState, action: followACType | unFollowACType): initialStateType => {
    switch (action.type) {

        default:
            return state;
    }
}
export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>

export const followAC = () => {

    return {type: FOLLOW} as const
}

export const unFollowAC = () => {
    return {type: UNFOLLOW} as const
}


