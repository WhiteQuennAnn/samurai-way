import React from 'react';
import s from "./Post.module.css";

export const Post = (props: any) => {

    return (
        <div className={s.item}>
            <img src={"https://klike.net/uploads/posts/2022-06/1655792831_4.jpg"}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
