import React from 'react';
import {
    addPostActionCreator,
    updateNewPostActionCreator
} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {OnePostTypeProps} from "../../../Type";
import {AppStoreType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    postsData: OnePostTypeProps[]
    newPostText: string
}
type mapDispatchToProps = {
    updateNewPost: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any): mapDispatchToProps => {
    return {
        updateNewPost: (text: string) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
