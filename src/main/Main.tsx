import React from 'react';
import st from './Main.module.css';
import stComonFrame from '../common/styles/stuleCommonContainer.module.css';


export const Main = () => {
    return (
        <div className={st.main}>
            <div className={`${stComonFrame.commonFrame} ${st.frame}`}>
            <div className={st.left}>
                <span> Ктобы мог подумать что я создам эту страницу, и что ты зайдешь ее посмотреть</span>
                <h1>Я Павел </h1>
                <p>Если помотать назад то я печатник и автомеханник, но жизнь предоставляет возможности и не так давно я задался  вопросом-А как это работать Фронтенд разработчиком  со всеми вытекающими?... В процессе ответа на этот вопрос я пакодил, ну и сюда закинул свои творения. Если ты пожелаешь что-то мне сказать, то скажи! там внизу есть....вобщем разберешся.
                    НУ и здоровья, счастья в личной жизни, любви  и любовниц или любовников канечно  денег,  еще магу накинуть удачи  и чтоб тачка не ломалась!
                </p>
            </div>
            <div className={st.foto}></div>
            </div>
        </div>
    )
}