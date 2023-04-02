import React from 'react';
import st from './Header.module.scss';
import {Navigator} from "../x11-navigator/Navigator";
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {BurgerNavigator} from "../x12-burgerNavigator/BurgerNavigator";


export const Header = () => {
    return (
        <div className={st.header}>
            <div className={`${stCommon.commonFrame} ${st.headerContainer}`}>
                <Navigator/>
                <BurgerNavigator/>
            </div>
        </div>
    )
}