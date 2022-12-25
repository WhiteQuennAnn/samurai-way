import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/Message";
import {Global} from "../../Type";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";

export const Dialogs = (props: Global) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElenents = state.messageItemData
        .map(m => <MessageItem message={m.message}/>)

    let newMessageBody =  state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div> {messagesElenents}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder={"Enter your message..."}> </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}> Send</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

