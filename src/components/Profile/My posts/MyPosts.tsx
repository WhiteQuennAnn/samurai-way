import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button> Add post</button>
                <button> Remove</button>
            </div>

            <div className={s.posts}>
                <Post message={"Hey how are you"} likesCount={"22"}/>
                <Post message={"its my first post"} likesCount={"65"}/>

            </div>
        </div>
    )
}
