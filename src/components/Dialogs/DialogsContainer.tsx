import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {PropsType} from "../../App";
import StoreContext from "../../StoreContext";

export const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <StoreContext.Consumer>{(store) => {
            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                            dialogsPage={state}/>
        }
        }
        </StoreContext.Consumer>
    );
};

