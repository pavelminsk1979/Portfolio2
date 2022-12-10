import React from 'react';
import st from './itemSkil.module.css';

type ItemSkilType = {
    titleItemSkil: string
    description: string
}

export const ItemSkil = (props: ItemSkilType) => {
    return (
        <div className={st.itemSkil}>
            <div className={st.icon}></div>

            <h3>{props.titleItemSkil}</h3>

            <span className={st.description}>
                {props.description}
            </span>

        </div>
    )
}