import React from 'react';
import s from './Post.module.css'

export type PropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return (
        <div>
            <img
                src={'https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png'}
                className={s.icon}/>
            {props.message}
            <span>{props.likesCount}</span>
        </div>
    );
};