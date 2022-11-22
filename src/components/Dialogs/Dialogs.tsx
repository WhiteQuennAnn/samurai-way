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

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dislogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
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
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name={ dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>

            </div>
            <div className={s.messages}>
                <MessageItem message={messageItemData[0].message}/>
                <MessageItem message={messageItemData[1].message}/>
                <MessageItem message={messageItemData[2].message}/>

            </div>

        </div>

    );
};

