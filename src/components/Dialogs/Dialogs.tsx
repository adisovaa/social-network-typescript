import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Siri'},
        {id: 2, name: 'Alexa'},
        {id: 3, name: 'Alisa'},
        {id: 4, name: 'Kira'},
        {id: 5, name: 'Lorem'},
    ]

    let message = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What is going on?'},
        {id: 3, message: 'What is up?'},
        {id: 4, message: 'Lool'},
        {id: 5, message: 'LMAO!'},
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = message.map(m => <Messages message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogsMessages}>
                {messageElement}
            </div>
        </div>
    );
};