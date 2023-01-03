import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/Message";
import {Global} from "../../Type";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props: Global) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElenents = state.messageItemData
        .map(m => <MessageItem message={m.message}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (

        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
    );
};

