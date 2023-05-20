import React from 'react';
import s from './App.module.css'
import {Header} from "./components/header/Header";
import {NavBar} from "./components/navigation/NavBar";
import {Profile} from "./components/profile/Profile";

function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;