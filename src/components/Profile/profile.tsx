import React from 'react';
import s from "./profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {PropsType} from "../../App";

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.store.getState().profilePage.postsData}
                     dispatch={props.store.dispatch}
                     newPostText={props.store.getState().profilePage.newPostText}
            />
        </div>
    );
}
