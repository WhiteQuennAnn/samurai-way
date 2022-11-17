import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

export const App = (props: any) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>

                <div className="app-wrapper-content">
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route exact path='/profile' component={Profile}/>
                    {/*    <Route component={News}/>*/}
                    {/*    <Route component={Music}/>*/}
                    {/*    <Route component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}



