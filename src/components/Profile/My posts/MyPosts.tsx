import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message={"Hey how are you"} likesCount={"22"}/>
                <Post message={"its my first post"} likesCount={"65"}/>

            </div>
        </div>
    )
}
