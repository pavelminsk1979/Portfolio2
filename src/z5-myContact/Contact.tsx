import React from 'react';
import st from './Contact.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {Title} from "../common/components/title/Title";


export const Contact = () => {
    return (
        <div className={st.commonСontact}>
            <div className={`${stCommon.commonFrame} ${st.containerСontact}`}>

                <Title title={'контакты'}/>

                <form className={st.blokInputTewtarea}>
                    <input className={st.input}
                           type="text" placeholder={'Имя'}/>
                    <input className={st.input}
                                    type="text" placeholder={'e-mail'}/>

                    <textarea className={st.textarea}
                              placeholder={'Сообщение'}/>

                    <button className={st.buttonSubmit} type='submit'>ОТПРАВИТЬ</button>
                </form>

            </div>

        </div>
    )
}