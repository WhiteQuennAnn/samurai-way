import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./Type";
import store, {AddPostActionType, ChangeNewTextActionType, StoreType} from "./redux/store";
import {AppStoreType} from "./redux/redux-store";

// export type AppPropsType = {
//     dialogsData: Array<OneDialogsDataPropsType>
//     messageItemData: Array<OneMessageItemDataProps>
//     postsData: Array<OnePostTypeProps>
// }
export type ProfilePropsType = {
    state: StateType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void

}
type AllType = PropsType | ProfilePropsType;

type PropsType = {
    store: AppStoreType
}

export const App: React.FC<ProfilePropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs
                        store={props.store}
                       // dialogsPage={props.state.dialogsPage}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        state={props.state}
                        dispatch={props.dispatch}
                    ></Profile>}

                    />

                </div>
            </div>
        </BrowserRouter>
    );
}



