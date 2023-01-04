import React from 'react';
import {
    addPostActionCreator,
    updateNewPostActionCreator
} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {PropsType} from "../../../App";

import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";
import {Global} from "../../../Type";

const mapStateToProps = (state: Global) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPost: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
