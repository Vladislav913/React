const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState ={
    message: [
        {id: 1, message: 'How is qqqqqqqq'},
        {id: 2, message: 'How is bbbbbbbb'},
        {id: 3, message: 'How is qqqqrrrrq'},
        {id: 4, message: 'How is bbbbwdwsfs'},
        {id: 5, message: 'How is dfvdgfdgfdf'},
    ],
    dialogs: [
        {id: 1, name: 'Влад1'},
        {id: 2, name: 'Влад2'},
        {id: 3, name: 'Влад3'},
        {id: 4, name: 'Влад4'},
        {id: 5, name: 'Влад5'},
        {id: 4, name: 'Влад6'},
    ],
    newMessageBody: ''
}

const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = " "
            state.message.push({id: 6, message: body})
            return state
        default:   return state
    }
    return state
}

export let updateNewMessageBodyCreator = (body) =>{
    return {
        type : UPDATE_NEW_MESSAGE_BODY, body :body
    }
}
export let sendMessageBodyCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReduser