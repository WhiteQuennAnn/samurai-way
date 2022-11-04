import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src=" https://assets.turbologo.ru/blog/ru/2020/11/18161757/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1.png"/>
            </header>
            <nav className="nav">
                <div><a>Profile</a> </div>
                <div><a>Profile</a> </div>
                <div><a>Profile</a> </div>
                <div><a>Profile</a> </div>
                <div><a>Profile</a> </div>
                <a>Profile</a>
                <a>Messages</a>
            </nav>
            <div className="content">Main content</div>
        </div>
    );
}


