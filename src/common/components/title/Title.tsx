import React from 'react';
import st from './Title.module.css';

type TitleType={
    title:string
}

export const Title = (props:TitleType) => {
    return (
        <div className={st.title}>

            <h2 >{props.title}</h2>
        </div>
    )
}