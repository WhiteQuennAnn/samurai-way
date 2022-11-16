import React from 'react';
import s from "./nav.module.css";
import {NavLink} from "react-router-dom";

// let classesNew = `${s.item} ${s.active}`
export const Nav = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}><NavLink to="/profile">Profile</NavLink></div>
                <div className={s.item}><NavLink to="/dialogs">Messages</NavLink></div>
                <div className={s.item}><a>News</a></div>
                <div className={s.item}><a>Music</a></div>
                <div className={s.item}><a>Settings</a></div>

            </nav>
        </div>
    )

}