import {SendMessageType, updateNewMessageBodyType} from "./redux/DialogsReducer";
import {AddPostActionType, ChangeNewTextActionType} from "./redux/ProfileReducer";

export type StateType = {
    profilePage: {
        postsData: OnePostTypeProps[],
        newPostText: string
    }
    dialogsPage: {
        messageItemData: OneMessageItemDataProps[]
        dialogsData: OneDialogsDataPropsType[]
        newMessageBody: string
    }
}
export type MyPostsTypeProps = {
    postsData: Array<OnePostTypeProps>
    newPostText: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export type Global = {
    dialogsPage: {
        messageItemData: Array<OneMessageItemDataProps>
        dialogsData: Array<OneDialogsDataPropsType>
        newMessageBody: string
    }
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void


}
export type OneDialogsDataPropsType = {
    id: number
    name: string
}

export type OneMessageItemDataProps = {
    id: number
    message: string
}
export type OnePostTypeProps = {
    id: number
    message: string | undefined
    likesCount: number
}