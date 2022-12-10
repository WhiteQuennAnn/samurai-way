import React from 'react';
import s from "./profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ProfilePropsType} from "../../App";


export const Profile = (props: ProfilePropsType) => {
    // let postsData = [
    //     {id: 1, message: "Hey how are you", likesCount: 22},
    //     {id: 2, message: "its my first post", likesCount: 65}
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.profilePage.postsData}
                     addPost={props.addPost}
                     newPostText={props.state.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}
