import React from 'react';
import s from "./profile.module.css";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://mobimg.b-cdn.net/v3/fetch/10/10b532bc3da4dd2e0715ea146abd32d4.jpeg"/>
            </div>
            <div>
                ava+description
            </div>

            <div>
                My posts
                <div>
                    New post
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
        </div>
    )
}
