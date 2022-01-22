import React from 'react';
import style from './tabs.module.css';
import {NavLink} from "react-router-dom";

const Tab1 = () => {
    return (
        <div className={style.tab1Wrapper}>
            <div className={style.tab1}>
                <NavLink to='/' className={navData => navData.isActive && style.active}>
                    Профиль
                </NavLink>
            </div>
        </div>
    )
};

export default Tab1;