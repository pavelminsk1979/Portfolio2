import React from 'react';
import st from './Contact.module.css';
import stCommon from '../common/styles/stuleCommonContainer.module.css';


export const Contact = () => {
    return (
        <div className={st.commonСontact}>
            <div className={`${stCommon.commonFrame} ${st.containerСontact}`}>
                <h4 className={st.title}>Контакты</h4>
                <div>
                    <input type="text" size={35}/>
                    <div className={st.title}>Оставте свои контакты e-mail</div>
                </div>

                <div>
                    <textarea cols={40} rows={6}>ТЕКСТ</textarea>

                </div>

                <button>ОТПРАВИТЬ</button>
            </div>

        </div>
    )
}