import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialodItem from "./DialogItem/DialogItem";
import {sendMessageBodyCreator, updateNewMessageBodyCreator} from "../../redax/dialogs-reduser";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialodItem name={d.name} id={d.id}/>);
    let messageElements = state.message.map(m => <Message className={s.message} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let see = React.createRef()

    let newPostDialog = () => {

        let body = see.current.value
        props.updateNewMessageBody(body)
    }
    let newAddDialog = () => {
        props.sendMessage()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea value={newMessageBody} ref={see} onChange={newPostDialog}></textarea>
                {<button onClick={newAddDialog}>Add</button>}
            </div>
        </div>
    )
}
export default Dialogs