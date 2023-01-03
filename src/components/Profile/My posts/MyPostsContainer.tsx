import React from 'react';
import {OnePostTypeProps} from "../../../Type";
import {
    addPostActionCreator,
    AddPostActionType,
    ChangeNewTextActionType,
    updateNewPostActionCreator
} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {PropsType} from "../../../App";

export type MyPostsTypeProps = {
    postsData: Array<OnePostTypeProps>
    newPostText: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts postsData={state.profilePage.postsData}
                 newPostText={state.profilePage.newPostText}
                 updateNewPost={onPostChange}
                 addPost={addPost}/>
    )
}
