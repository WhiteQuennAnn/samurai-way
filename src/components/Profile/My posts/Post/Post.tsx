import React from 'react';
import s from "./Post.module.css";

export const Post = (props) => {
    props.message
    return (
        <div className={s.item}>
            <img src={"https://klike.net/uploads/posts/2022-06/1655792831_4.jpg"}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
