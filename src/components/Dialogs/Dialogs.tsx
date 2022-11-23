import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogsItem";
import {MessageItem} from "./Message/Message";

export type Global = {
    dialogsData: Array<OneDialogsDataPropsType>
    messageItemData: Array<OneMessageItemDataProps>
}
export type OneDialogsDataPropsType = {
    id: number
    name: string
}

export type OneMessageItemDataProps = {
    id: number
    message: string
}


export const Dialogs = (props: Global) => {

    // let dialogsData = [
    //     {id: 1, name: "Anya"},
    //     {id: 2, name: "Dima"},
    //     {id: 3, name: "Igor"}
    // ]
    //
    // let messageItemData = [
    //     {id: 1, message: "Hello"},
    //     {id: 2, message: "Pike"},
    //     {id: 3, message: "Buy"}
    // ]

    let dialogsElements = props.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElenents = props.messageItemData
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

