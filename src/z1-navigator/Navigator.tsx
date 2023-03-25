import React from 'react';
import st from './Navigator.module.css';

export const Navigator = () => {
    return (
        <div className={st.navigator}>
            <a href="">главная</a>
            <a href="">скилы</a>
            <a href="">проэкты</a>
            <a href="">контакты</a>
        </div>
    )
}