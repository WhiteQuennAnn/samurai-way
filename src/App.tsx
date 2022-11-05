import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";

export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}


