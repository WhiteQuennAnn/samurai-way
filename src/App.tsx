import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./Type";


// export type AppPropsType = {
//     dialogsData: Array<OneDialogsDataPropsType>
//     messageItemData: Array<OneMessageItemDataProps>
//     postsData: Array<OnePostTypeProps>
// }

export const App = (props: StateType) => {
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
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage}
                                                                 />}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}



