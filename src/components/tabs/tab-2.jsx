import React from 'react';
import style from './tabs.module.css';
import {NavLink} from "react-router-dom";

const Tab2 = () => {
    return (
        <div className={style.tab2Wrapper}>
            <div className={style.tab2}>
                <NavLink to='/users' className={navData => navData.isActive && style.active}>
                    Друзья пользователя
                </NavLink>
            </div>
        </div>
    )
};

export default Tab2;