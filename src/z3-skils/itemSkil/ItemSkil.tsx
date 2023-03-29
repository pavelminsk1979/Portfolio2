import React from 'react';
import { Fade } from 'react-awesome-reveal';
import st from './itemSkil.module.scss';


type ItemSkilType = {
    style?:any
}

export const ItemSkil = (props: ItemSkilType) => {
    return (
        <Fade >
            <div className={st.block}>
                <div className={st.text}>
                    <div>JavaScript</div>
                    <div>65%</div>
                </div>
                <div className={st.line}>
                    <div className={st.lineColor}></div>
                    <div className={st.lineWhite}></div>
                </div>
            </div>
        </Fade >

    )
}