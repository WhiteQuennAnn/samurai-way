import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {PropsType} from "../../App";
import StoreContext from "../../StoreContext";
import {AppStoreType} from "../../redux/redux-store";

export const DialogsContainer = (props: PropsType) => {

    return (
        <StoreContext.Consumer>{(store: AppStoreType) => {
            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))
                return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
        }
        }

        </StoreContext.Consumer>
    )
}
}\
