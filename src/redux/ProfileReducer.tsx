import {OnePostTypeProps} from "../Type";

export const ProfileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: OnePostTypeProps = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 94
            };
            state.postsData.push(newPost)
            state.newPostText = ' ';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;

            return state;
        default:
            return state;
    }
}


