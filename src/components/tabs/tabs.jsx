import React from 'react';
import style from './tabs.module.css';
import Tab1 from "./tab-1";
import Tab2 from "./tab-2";

const Tabs = () => {
    return (
        <div className={style.tabs}>
            <Tab1/>
            <Tab2/>
        </div>
    )
};

export default Tabs;