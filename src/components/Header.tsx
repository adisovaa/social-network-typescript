import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main} from "./main/Main";
import {Profile} from "./profile/Profile";
import {Dialogs} from "./dialog/Dialogs";

export const PATH = {
    MAIN: '/main',
    PROFILE: '/profile',
    DIALOG: '/dialog',
}

export const Header = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Main/>}/>

                <Route path={PATH.MAIN} element={<Main/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.DIALOG} element={<Dialogs/>}/>
            </Routes>
        </div>
    );
};
