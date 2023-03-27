import React from 'react';
import { Fade } from 'react-awesome-reveal';
import st from './itemSkil.module.scss';


type ItemSkilType = {
    style?:any
}

export const ItemSkil = (props: ItemSkilType) => {
    return (
        <Fade >
            <div style={props.style}
                 className={st.itemSkil}>
            </div>
        </Fade >

    )
}