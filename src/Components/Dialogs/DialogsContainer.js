import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialodItem from "./DialogItem/DialogItem";
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reduser";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
debugger
    let state = props.store.getState().dialogsPage

    let see = React.createRef()

    let newAddDialog = () => {
        props.store.dispatch(sendMessageBodyCreator())
    }

    let newPostDialog = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (<Dialogs updateNewMessageBody={newPostDialog} sendMessage={newAddDialog}
                     dialogsPage={state} /> )
}
export default DialogsContainer