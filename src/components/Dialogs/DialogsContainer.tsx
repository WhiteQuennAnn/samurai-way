import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import { ActionsType } from '../../Redux/Store'
import { StoreContext } from '../../StoreContext'

import { DialogItem } from './DialogItem/Dialog.item'
import { Dialogs } from './Dialogs'
import c from './Dialogs.module.css'
import { Message } from './Message/Message'

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
    dispatch: (action: ActionsType) => void
}

export const DialogsContainer = () => {

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
                    dialogs={store.getState().dialogPage.dialogs}
                    messages={store.getState().dialogPage.messages}
                    newMessageBody={store.getState().dialogPage.newMessageBody}
                    updateNewMessageBody={onNewMessageChange}
                    onMessageClick={onMessageClick}
                />
            )
        }}
    </StoreContext.Consumer>
)
}
