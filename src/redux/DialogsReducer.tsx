const DialogsReducer = (state, action) => {

    if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        this._state.dialogsPage.newMessageBody = action.body;
        this._onChange();
    } else if (action.type === 'SEND-MESSAGE') {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = "";
        this._state.dialogsPage.messageItemData.push({id: 4, message: body})
        this._onChange();
    }

    return state;
}