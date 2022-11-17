import React from 'react';
import s from "./profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/profileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>

            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}
