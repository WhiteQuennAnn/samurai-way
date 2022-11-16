import React from 'react';
import s from './Dialogs.module.css';

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Anya</div>
                <div className={s.dialog}>Dima</div>
                <div className={s.dialog}>Igor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Pike</div>
                <div className={s.message}>Buy</div>
            </div>

        </div>

    );
};

