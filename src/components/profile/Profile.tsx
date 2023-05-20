import React from 'react';
import s from './../../App.module.css'
import {MyPosts} from "./MyPost/MyPosts";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src={'https://techstory.in/wp-content/uploads/2021/07/Factory_FB-Image.jpg'}/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
};