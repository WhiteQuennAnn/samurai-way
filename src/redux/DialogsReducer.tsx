import {OneDialogsDataPropsType, OneMessageItemDataProps} from "../Type";

type DialogsType = {
    messageItemData: OneMessageItemDataProps[]
    dialogsData: OneDialogsDataPropsType[]
    newMessageBody: string
}

export type initialStateType = typeof initialState

export let initialState: DialogsType = {
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
    newMessageBody: ""
}
export const DialogsReducer = (state = initialState, action: SendMessageType | updateNewMessageBodyType): initialStateType => {

    let stateCopy = {...state, messageItemData: [...state.messageItemData]}


    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messageItemData.push({id: 4, message: body});
            return state;
        default:
            return state;
    }
}

export type SendMessageType = ReturnType<typeof sendMessageCreator>
export type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => {

    return {
        type: 'SEND-MESSAGE'
    } as const
}
export const updateNewMessageBodyCreator = (body: string) => {

    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
