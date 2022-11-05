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
                <Post message={"Hey how are you"}/>
                <Post message={"its my first post"}/>

            </div>
        </div>
    )
}
