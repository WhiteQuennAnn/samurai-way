import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {OnePostTypeProps} from "../../../Type";
import {
    addPostActionCreator,
    AddPostActionType,
    ChangeNewTextActionType,
    updateNewPostActionCreator
} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";

export type MyPostsTypeProps = {
    postsData: Array<OnePostTypeProps>
    newPostText: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const MyPostsContainer = (props: MyPostsTypeProps) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostActionCreator(text)
        // props.updateNewPost(newText);
        props.dispatch(action)
    }

    return (
        <MyPosts postsData={} newPostText={} dispatch={} updateNewPost={onPostChange} addPost={addPost}/>
    )
}
