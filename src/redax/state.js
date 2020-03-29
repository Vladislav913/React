import dialogsReduser from "./dialogs-reduser";
import profileReduser from "./profile-reduser";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {

    _state: {

        profilePage: {
            posts: [
                {message: 'How is qqqqqqqq', userLike: '5'},
                {message: 'How is bbbbbbbb', userLike: '3'},
                {message: 'How is qqqqrrrrq', userLike: '15'},
                {message: 'How is bbbbwdwsfs', userLike: '9'},
                {message: 'How is dfvdgfdgfdf', userLike: '4'},
            ],
            newPostText: '',

        },
        dialogsPage: {
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
        },
        navBarPage: {
            friends: [
                {name: 'Hsfdff'},
                {name: 'Hoeffee'},
                {name: 'Hhgthff'},
            ]
        },
    },

    getState() {

        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {

    },
    updateNewPostText(newText) {

    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)

        this._state.profilePage = profileReduser(this._state.profilePage, action)

        this._callSubscriber(this._state)
    }
}


export default store