import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {OnePostTypeProps} from "../../../Type";


// export type OnePostTypeProps = {
//     id: number
//     message: string
//     likesCount: number
// }
type MyPostsTypeProps = {
    postsData: Array<OnePostTypeProps>
}


export const MyPosts = (props: MyPostsTypeProps) => {
    // let postsData = [
    //     {id: 1, message: "Hey how are you", likesCount: 22},
    //     {id: 2, message: "its my first post", likesCount: 65}
    // ]

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

   let addPost = () => {
        alert('heewefwvesdvbesbv')
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button onClick={ addPost }> Add post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
