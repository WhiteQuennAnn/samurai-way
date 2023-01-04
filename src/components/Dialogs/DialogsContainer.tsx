import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";

import {Dialogs} from './Dialogs'
import {AddPostActionType, ChangeNewTextActionType} from "../../redux/ProfileReducer";
import {connect} from "react-redux";

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                let onMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                return (
                    <Dialogs
                        dialogsPage={store.getState().dialogsPage}
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={onMessageClick}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
}

let f1 = () => {
    return {

    }

}

let f2 = () => {
    return {

    }

}

const SuperDialogsContainer = connect (f1, f2) (Dialogs)
