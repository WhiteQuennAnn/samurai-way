import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

type MessageItemProps = {
    message: string
}

const MessageItem = (props: MessageItemProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = (props: any) => {


    let dialogsData = [
        {id: 1, name: "Anya"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Igor"}
    ]


    let messageItemData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "Pike"},
        {id: 3, message: "Buy"}
    ]

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElenents = messageItemData
        .map(m => <MessageItem message={m.message}/>)
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElenents}

            </div>

        </div>

    );
};

