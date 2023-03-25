import React from 'react';
import st from './itemSkil.module.css';

type ItemSkilType = {
    style?:any
}

export const ItemSkil = (props: ItemSkilType) => {
    return (
        <div style={props.style}
            className={st.itemSkil}>

        </div>
    )
}