import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dislogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


export const Dialogs = (props: any) => {
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name={"Anya"} id={1}/>
                <DialogItem name={"Dima"} id={2}/>
                <DialogItem name={"Igor"} id={3}/>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Pike</div>
                <div className={s.message}>Buy</div>
            </div>

        </div>

    );
};

