import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, setUsersACType, unFollowAC} from "../../redux/UsersReducer";
import users from "./Users";

let mapStateToProps = (state: AppStoreType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<string>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);