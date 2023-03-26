import React from 'react';
import st from './Header.module.scss';
import {Navigator} from "../z1-navigator/Navigator";
import stCommon from '../common/styles/stuleCommonContainer.module.css';


export const Header = () => {
    return (
        <div className={st.header}>
            <div className={`${stCommon.commonFrame} ${st.headerContainer}`}>
                <Navigator/>
            </div>


        </div>
    )
}