import React from 'react';
// import {OnePostTypeProps} from "../components/Profile/My posts/MyPosts";
// import {OneDialogsDataPropsType, OneMessageItemDataProps} from "../components/Dialogs/Dialogs";

// export type StateType = {
//     profilePage: Array<OnePostTypeProps>
//     dialogsPage: {
//         messageItemData: Array<OneMessageItemDataProps>
//         dialogsData: Array<OneDialogsDataPropsType>
//     }
// }

const state = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hey how are you", likesCount: 22},
            {id: 2, message: "its my first post", likesCount: 65}]
    },
    dialogsPage: {
        messageItemData: [
            {id: 1, message: "Hello"},
            {id: 2, message: "Pike"},
            {id: 3, message: "Buy"}
        ],
        dialogsData: [
            {id: 1, name: "Anya"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Igor"}
        ],
    }
}


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 94
    };

    state.profilePage.postsData.push(newPost)
}
export default state;