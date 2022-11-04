import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {Nav} from "./components/nav";
import {Profile} from "./components/Profile";

export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}


