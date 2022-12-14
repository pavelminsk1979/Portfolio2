import React from 'react';
import st from './Contact.module.css';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {Title} from "../common/components/title/Title";


export const Contact = () => {
    return (
        <div className={st.commonСontact}>
            <div className={`${stCommon.commonFrame} ${st.containerСontact}`}>

                <Title title={'контакты'}/>

                <form className={st.blokInputTewtarea}>
                    <input type="text"/>

                    <textarea />

                    <button className={st.buttonSubmit} type='submit'>ОТПРАВИТЬ</button>
                </form>

            </div>

        </div>
    )
}