import React from 'react';
import st from './Main.module.css';
import stComonFrame from '../common/styles/stuleCommonContainer.module.css';


export const Main = () => {
    return (
        <div className={st.main}>
            <div className={`${stComonFrame.commonFrame} ${st.frame}`}>
                <div className={st.text}>
                    <span> Ктобы мог подумать что я создам эту страницу, и что ты зайдешь ее посмотреть</span>
                    <h1>Меня зовут  Павел </h1>
                    <p>Если помотать назад то я печатник и автомеханник, но жизнь предоставляет возможности и я задался
                        вопросом-А как это работать Frontend Developer со всеми плюсами?... В процессе ответа на этот
                        вопрос я почитал, потом почитал еще , потом пакодил, и вот она-презентация!. Если ты пожелаешь
                        что-то мне сказать, то скажи! там внизу есть....вобщем разберешся.

                    </p>
                </div>
                <div className={st.foto}></div>
            </div>
        </div>
    )
}