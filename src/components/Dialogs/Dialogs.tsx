import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/Message";
import {Global} from "../../Type";

export const Dialogs = (props: Global) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElenents = props.dialogsPage.messageItemData
        .map(m => <MessageItem message={m.message}/>)

    let newMessageBody = props.dialogsPage.newMessageBody


    let onSendMessageClick = () => {

    }
    let onNewMessageChange = () => {

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

