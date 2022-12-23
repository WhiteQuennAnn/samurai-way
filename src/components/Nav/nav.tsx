import React from 'react';
import s from "./nav.module.css";
import {NavLink} from "react-router-dom";

// let classesNew = `${s.item} ${s.active}`
export const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to='/setting' activeClassName={s.active}>Settings</NavLink></div>
        </nav>
    )
}