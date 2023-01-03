import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

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
                    <Route path='/dialogs' render={() => <DialogsContainer
                        //store={props.store}
                        // dialogsPage={props.store.getState().dialogsPage}
                        // dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        //store={props.store}
                        // dispatch={props.store.dispatch.bind(props.store)}
                        // profilePage={props.store.getState().profilePage}
                    ></Profile>}

                    />

                </div>
            </div>
        </BrowserRouter>
    );
}



