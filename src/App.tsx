import React from 'react';
import s from './App.module.css'
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialog/Dialogs";
import {Route, Routes} from "react-router-dom";

export const PATH = {
    PROFILE: '/',
    DIALOG: '/dialog',
}

function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <div>
                <Routes>
                    <Route path={PATH.PROFILE} element={<Profile/>}>Profile</Route>
                    <Route path={PATH.DIALOG} element={<Dialogs/>}>Dialogs</Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;