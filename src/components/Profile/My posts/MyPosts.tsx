import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postsData = [
        {id: 1, message: "Hey how are you", likesCount: 22},
        {id: 2, message: "its my first post", likesCount: 65}
    ]
    let postsElements = postsData
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button> Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
