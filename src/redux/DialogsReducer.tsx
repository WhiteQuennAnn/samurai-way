import {OneDialogsDataPropsType, OneMessageItemDataProps} from "../Type";

type DialodsType = {
    messageItemData: OneMessageItemDataProps[]
    dialogsData: OneDialogsDataPropsType[]
    newMessageBody: string
}

let initialState: DialodsType = {
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
export const DialogsReducer = (state = initialState, action) => {
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
