import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

// export const NavBar = () => {
//     const location = useLocation()
//     const currentPage = location.pathname
//
//     const pageName = PATH.MAIN
//         ? 'Main'
//         : currentPage == PATH.DIALOG
//             ? 'Dialog'
//             : currentPage == PATH.PROFILE
//                 ? 'Profile'
//                 : 'Error'
//
//     return (
//         <div className={s.nav}>
//             <h1>{pageName}</h1>
//         </div>
//     );
// };


export const NavBar = () => {

    return (
        <div className={s.nav}>
            <NavLink to={PATH.PROFILE}
                     className={({isActive}) => isActive ? s.active : s.isNotActive}>PROFILE</NavLink>
            <NavLink to={PATH.DIALOG}
                     className={({isActive}) => isActive ? s.active : s.isNotActive}>DIALOG</NavLink>
        </div>
    );
};