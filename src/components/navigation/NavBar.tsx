import React from 'react';
import s from './../../App.module.css'
import {Route, Routes} from "react-router-dom";
import {Profile} from "../profile/Profile";
import {Dialogs} from "../dialog/Dialogs";

// export const PATH = {
//     MAIN: '/main',
//     PROFILE: '/profile',
//     DIALOG: '/dialog',
// }

export const NavBar = () => {
    return (
        <div className={s.nav}>
            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<Content/>}/>*/}

            {/*    <Route path={PATH.MAIN} element={<Content/>}/>*/}
            {/*    <Route path={PATH.PROFILE} element={<Profile/>}/>*/}
            {/*    <Route path={PATH.DIALOG} element={<Dialogs/>}/>*/}
            {/*</Routes>*/}
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};