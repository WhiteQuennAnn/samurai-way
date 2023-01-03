import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {PropsType} from "../../App";

export const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage

    // let dialogsElements = state.dialogsData
    //     .map(d => <DialogItem name={d.name} id={d.id}/>);
    //
    // let messagesElenents = state.messageItemData
    //     .map(m => <MessageItem message={m.message}/>)
    //
    // let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (

        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
    );
};

