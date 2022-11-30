export type StateType = {

        profilePage: {
            postsData: OnePostTypeProps[]
        }
        dialogsPage: {
            messageItemData: OneMessageItemDataProps[]
            dialogsData: OneDialogsDataPropsType[]

    }
    // addPost: (postMessage: string) => void

    // profilePage: Array<OnePostTypeProps>
    // dialogsPage: {
    //     messageItemData: Array<OneMessageItemDataProps>
    //     dialogsData: Array<OneDialogsDataPropsType>
    // }
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