import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={"/dislogs/1"}> Anya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dislogs/2"}> Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={"/dislogs/3"}> Igor
                    </NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Pike</div>
                <div className={s.message}>Buy</div>
            </div>

        </div>

    );
};
