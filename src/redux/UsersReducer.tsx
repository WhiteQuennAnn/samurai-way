import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeKOvIvCR4DM345hjZsPpWCh-WISvmvM5sFalyQuU&s', followed: false, fullName: "Igor", status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
        {
            id: 2,
            photoUrl: 'https://strana.today/img/forall/u/0/36/foto-1-pozdravleniya-s-rozhdestvom-svoimi-slovami.jpg',
            followed: true,
            fullName: "Sasha",
            status: 'I am teacher',
            location: {city: 'Madrid', country: 'Spane'}
        },
        {id: 3,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-WH5AQLiQj5kaHs7HpoVAYooOWsaJoZj1ynrETM&s ',
            followed: false, fullName: "Dima", status: 'I am doctor', location: {city: 'Rome', country: 'Italy'}},
    ],

}
export type initialStateType = typeof initialState

export const UsersReducer = (state = initialState, action: followACType | unFollowACType | setUsersACType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS : {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}
export type followACType = ReturnType<typeof followAC>
export type unFollowACType = ReturnType<typeof unFollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {

    return {type: FOLLOW, userId} as const
}

export const unFollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsersAC = (users: Array<string>) => {
    return {type: SET_USERS, users} as const
}


