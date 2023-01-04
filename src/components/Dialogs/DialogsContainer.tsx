import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";

import {Dialogs} from './Dialogs'
import {AddPostActionType, ChangeNewTextActionType} from "../../redux/ProfileReducer";
import {connect} from "react-redux";
import {PropsType} from "../../App";
import {Global} from "../../Type";

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

let mapStateToProps = (state: Global) => {
    return {
        dialogsPage: state.dialogsPage
    }

}

let f2 = () => {
    return {
        c: 3
    }

}

const SuperDialogsContainer = connect(mapStateToProps, f2)(Dialogs)
