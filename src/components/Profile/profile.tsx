import React from 'react';
import s from "./profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {PropsType} from "../../App";
import {OnePostTypeProps} from "../../Type";
import {AddPostActionType, ChangeNewTextActionType} from "../../redux/ProfileReducer";


type ProfilePageType = {
    profilePage: {
        postsData: OnePostTypeProps[],
        newPostText: string
    }
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const Profile = (props: ProfilePageType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
            />
        </div>
    );
}
