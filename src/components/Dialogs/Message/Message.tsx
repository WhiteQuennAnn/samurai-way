import React from 'react';
import s from './../Dialogs.module.css';

type MessageItemProps = {
    message: string
}
export const MessageItem = (props: MessageItemProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


