import React from 'react';
import s from "./nav.module.css";

// let classesNew = `${s.item} ${s.active}`
export const Nav = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}><a href="/profile">Profile</a></div>
                <div className={s.item}><a href="/dialogs">Messages</a></div>
                <div className={s.item}><a>News</a></div>
                <div className={s.item}><a>Music</a></div>
                <div className={s.item}><a>Settings</a></div>

            </nav>
        </div>
    )

}