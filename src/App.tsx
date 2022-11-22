import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


export const App = (props: any ) => {
    // let postsData = [
    //     {id: 1, message: "Hey how are you", likesCount: 22},
    //     {id: 2, message: "its my first post", likesCount: 65}
    // ]
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>

                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() =><Dialogs dialogsData={props.dialogsData} messageItemData={props.messageItemData}/>}/>
                    <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}



