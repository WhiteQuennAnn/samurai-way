import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {OnePostTypeProps} from "../../../Type";
import {ProfilePropsType} from "../../../App";
import {AddPostActionType, ChangeNewTextActionType} from "../../../redux/state";
// export type OnePostTypeProps = {
//     id: number
//     message: string
//     likesCount: number
// }

let addPostActionCreator = () => {

    return {
        type: ADD_POST,
        payload: {
            postMessage: string
        }
    }
}

let updateNewPostActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: e.currentTarget.value

    }
}

export type MyPostsTypeProps = {
    postsData: Array<OnePostTypeProps>
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const MyPosts = (props: MyPostsTypeProps) => {
    // let postsData = [
    //     {id: 1, message: "Hey how are you", likesCount: 22},
    //     {id: 2, message: "its my first post", likesCount: 65}
    // ]

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let postMessage = newPostElement.current?.value
        //props.addPost(postMessage)
        postMessage && props.dispatch(addPostActionCreator)
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (postMessage) {
            // props.updateNewPostText(postMessage)
            props.dispatch(updateNewPostActionCreator)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div><textarea onChange={onPostChange}
                               ref={newPostElement}
                               value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}> Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
