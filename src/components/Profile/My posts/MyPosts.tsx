import React from 'react';
import s from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
                   <div>
                My posts
                <div>
                  <textarea></textarea>
                    <button> Add post </button>
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
           )
}
