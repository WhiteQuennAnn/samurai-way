import React from 'react';
import s from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
                   <div>
                My posts
                <div>
                  <textarea></textarea>
                    <button> Add post </button>
                    <button> Remove </button>
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        <img src={"https://klike.net/uploads/posts/2022-06/1655792831_4.jpg"}/>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                    <div className={s.item}>
                        post 3
                    </div>
                    <div className={s.item}>
                        post 4
                    </div>
                    <div className={s.item}>
                        post 5
                    </div>
                </div>
            </div>
           )
}
