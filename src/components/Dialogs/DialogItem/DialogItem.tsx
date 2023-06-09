import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css'

export type PropsType = {
    id: number
    name: string
}

export const DialogItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};