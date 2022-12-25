export const DialogsReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messageItemData.push({id: 4, message: body});
            return state;
        default:
            return state;
    }

}