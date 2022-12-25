import {OnePostTypeProps} from "../Type";

const ProfileReducer = (state, action) => {

    if (action.type === 'ADD-POST') {
        debugger
        const newPost: OnePostTypeProps = {
            id: new Date().getTime(),
            message: action.postMessage,
            likesCount: 94
        };
        state.postsData.push(newPost)
        state.newPostText = ' '
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
    }
    return state;
}


