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
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name={"Anya"} id={1}/>
                <DialogItem name={"Dima"} id={2}/>
                <DialogItem name={"Igor"} id={3}/>

            </div>
            <div className={s.messages}>
                <MessageItem message={"Hello"}/>
                <MessageItem message={"Pike"}/>
                <MessageItem message={"Buy"}/>

            </div>

        </div>

    );
};

