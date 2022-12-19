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
export type ProfilePropsType = {
    state: StateType
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const App = (props: ProfilePropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>

                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        state={props.state}
                        addPost={props.addPost}
                        newPostText={props.state.profilePage.newPostText}
                        updateNewPostText={props.updateNewPostText}
                    ></Profile>}

                    />

                </div>
            </div>
        </BrowserRouter>
    );
}



