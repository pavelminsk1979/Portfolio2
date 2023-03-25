import React from 'react';
import st from './Footer.module.css';
import stCommon from '../common/styles/stuleCommonContainer.module.css';

export const Footer = () => {
    return (
        <div className={st.commonFooter}>
            <div className={`${stCommon.commonFrame} ${st.blokFooter}`}>
                <div className={st.elem}>

                </div>
            </div>
        </div>
    )
}