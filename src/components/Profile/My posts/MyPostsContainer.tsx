import React from 'react';
import {
    addPostActionCreator,
    updateNewPostActionCreator
} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {OnePostTypeProps} from "../../../Type";
import {AppStoreType} from "../../../redux/redux-store";

type mapStateToPropstype = {
    postsData: Array<OnePostTypeProps>
    newPostText: string
}

const mapStateToProps = (state: AppStoreType): mapStateToPropstype => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
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
