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

export type MyPostsTypeProps = {
    postsData: Array<OnePostTypeProps>
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const MyPosts = (props: MyPostsTypeProps) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        //props.addPost();
       props.dispatch(addPostActionCreator())
    }

    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newText = e.target.value
    //    // props.updateNewPost(newText);
    //    props.dispatch(updateNewPostActionCreator(newText))
    // }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div><textarea onChange={onPostChange}
                               ref={newPostElement}
                               value={props.newPostText}/></div>
                <div>
                    <button
                        onClick={addPost}> Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
