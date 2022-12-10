import React from 'react';
import st from './Skils.module.css';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {ItemSkil} from "./itemSkil/ItemSkil";


export const Skils = () => {
    return (
        <div className={st.commonSkil}>
            <div className={`${stCommon.commonFrame} ${st.skilsContainer}`}>
                <h2 className={st.title}>Skils</h2>
                <div className={st.skilsBlok}>
<ItemSkil titleItemSkil={'1'} description={' адрес одинаковый, а данные все видят по разному. Либо вообще показывается страница авторизации. Почему так происходит? Ведь вы нигде не указываете свой id'}/>
<ItemSkil titleItemSkil={'2'} description={' а данные все видят по разному. Либо вообще показывается страница авторизации. Почему так происходит? Ведь вы нигде не указываете свой id'}/>
<ItemSkil titleItemSkil={'3'} description={' Либо вообще показывается страница авторизации. Ведь вы нигде не указываете свой id'}/>
<ItemSkil titleItemSkil={'4'} description={' все видят по разному. Либо вообще показывается страница авторизации. Почему так происходит? Ведь вы нигде не указываете свой id'}/>
<ItemSkil titleItemSkil={'5'} description={' Почему так происходит? Ведь вы нигде не указываете свой id'}/>
<ItemSkil titleItemSkil={'6'} description={' id'}/>
<ItemSkil titleItemSkil={'7'} description={' данные все видят по разному. Либо вообще показывается страница авторизации. Почему так происходит'}/>
<ItemSkil titleItemSkil={'8'} description={'получается что адрес одинаковый, а данные все видят по разному. Либо вообще '}/>
                </div>
            </div>
        </div>
    );
}