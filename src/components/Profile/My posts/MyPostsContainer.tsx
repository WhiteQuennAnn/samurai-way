import React from 'react';
import {
    addPostActionCreator,
    updateNewPostActionCreator
} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {PropsType} from "../../../App";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = (props: PropsType) => {

    return (
        <StoreContext.Consumer>{(store) => {

            let addPost = () => {
                props.store.dispatch(addPostActionCreator())
            }

            let onPostChange = (text: string) => {
                let action = updateNewPostActionCreator(text)
                props.store.dispatch(action)
            }

            let state = props.store.getState()
            return <MyPosts postsData={state.profilePage.postsData}
                            newPostText={state.profilePage.newPostText}
                            updateNewPost={onPostChange}
                            addPost={addPost}/>
        }

        }
        </StoreContext.Consumer>

    )
}
