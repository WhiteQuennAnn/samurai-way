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


let mapStateToProps = (state: Global) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: number) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }

}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
