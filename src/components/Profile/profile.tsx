import React from 'react';
import s from "./profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {OnePostTypeProps} from "../../Type";
import {AddPostActionType, ChangeNewTextActionType} from "../../redux/ProfileReducer";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {PropsType} from "../../App";

type ProfilePageType = {
    profilePage: {
        postsData: OnePostTypeProps[],
        newPostText: string
    }
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts postsData={props.profilePage.postsData}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*         newPostText={props.profilePage.newPostText}*/}
            {/*/>*/}
            <MyPostsContainer />
        </div>
    );
}
