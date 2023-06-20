import React from 'react';
import s from './App.module.css'
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navigation/NavBar";
import {Profile} from "./components/Profiles/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

export const PATH = {
    PROFILE: '/',
    DIALOG: '/Dialogs',
}

function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <div>
                <Routes>
                    <Route path={PATH.PROFILE} element={<Profile/>}>Profile</Route>
                    <Route path={PATH.DIALOG} element={<Dialogs/>}>Messages</Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;