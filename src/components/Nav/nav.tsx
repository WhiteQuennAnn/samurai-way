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
            {/*<ul>*/}
            {/*    <li style="--clr:#00ade1">*/}
            {/*        <a href="#" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>*/}
            {/*    </li>*/}
            {/*    <li style="--clr:#ff6492">*/}
            {/*        <a href="#" data-text="&nbsp;About">&nbsp;About&nbsp;</a>*/}
            {/*    </li>*/}
            {/*    <li style="--clr:#ffdd1c">*/}
            {/*        <a href="#" data-text="&nbsp;Services">&nbsp;Services&nbsp;</a>*/}
            {/*    </li>*/}
            {/*    <li style="--clr:#00dc82">*/}
            {/*        <a href="#" data-text="&nbsp;Blog">&nbsp;Blog&nbsp;</a>*/}
            {/*    </li>*/}
            {/*    <li style="--clr:#dc00d4">*/}
            {/*        <a href="#" data-text="&nbsp;Contact">&nbsp;Contact&nbsp;</a>*/}
            {/*    </li>*/}
            {/*</ul>*/}
        </nav>
    )
}