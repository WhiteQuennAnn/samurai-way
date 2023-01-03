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
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const MyPostsContainer = (props: MyPostsTypeProps) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text)
        // props.updateNewPost(newText);
        props.dispatch(action)
    }

    return (
        <MyPosts postsData={} newPostText={} dispatch={} updateNewPost={onPostChange} addPost={addPost}/>
    )
}
