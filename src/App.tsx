import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppStoreType} from "./redux/redux-store";

export type PropsType = {
    store: AppStoreType
}

export const App: React.FC<PropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={props.store.getState().dialogsPage}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.store.getState().profilePage}
                    ></Profile>}

                    />

                </div>
            </div>
        </BrowserRouter>
    );
}



