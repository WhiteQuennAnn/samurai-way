
export type StateType = {
    state:{
        profilePage: Array<OnePostTypeProps>
        dialogsPage: {
            messageItemData: Array<OneMessageItemDataProps>
            dialogsData: Array<OneDialogsDataPropsType>
        }
    }
    // profilePage: Array<OnePostTypeProps>
    // dialogsPage: {
    //     messageItemData: Array<OneMessageItemDataProps>
    //     dialogsData: Array<OneDialogsDataPropsType>
    // }
}

export type AppPropsType = {
    dialogsData: Array<OneDialogsDataPropsType>
    messageItemData: Array<OneMessageItemDataProps>
    postsData: Array<OnePostTypeProps>
}

export type Global = {
    dialogsPage: {
        messageItemData: Array<OneMessageItemDataProps>
        dialogsData: Array<OneDialogsDataPropsType>
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
    message: string
    likesCount: number
}