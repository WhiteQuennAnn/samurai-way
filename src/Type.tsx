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

export type Global = {
    dialogsPage: {
        messageItemData: Array<OneMessageItemDataProps>
        dialogsData: Array<OneDialogsDataPropsType>
        newMessageBody: string
    }
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
    message: string| undefined
    likesCount: number
}