import React from 'react';
import st from './Contact.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {Title} from "../common/components/title/Title";
import {Zoom} from 'react-awesome-reveal';
import {PhoneMailTelegram} from "./PhoneMailTelegram";
import phoneImage from "../assets/image/phone.png";
import telegramImage from "../assets/image/telegram.jpg";
import mailImage from "../assets/image/mail.png";


export const Contact = () => {

    const phoneFoto = {
        backgroundImage: `url(${phoneImage})`,
    }

    const telegramFoto = {
        backgroundImage: `url(${telegramImage})`,
    }

    const mailFoto = {
        backgroundImage: `url(${mailImage})`,
    }

    return (
        <div className={st.commonСontact}>

            <div className={`${stCommon.commonFrame} ${st.containerСontact}`}>

                <div className={st.left}>
                    <Title title={'контакты'}/>
                    <div className={st.leftFrame}>
                        <PhoneMailTelegram
                            style={phoneFoto}
                            text = 'телефон'/>
                        <PhoneMailTelegram
                            style={telegramFoto}
                            text = 'телеграм'/>
                        <PhoneMailTelegram
                            style={mailFoto}
                            text = 'почта'/>
                    </div>
                </div>


                <div className={st.right}>
                    <Zoom>
                        <form className={st.mail}>
                            <input className={st.input}
                                   type="text" placeholder={'Имя'}/>
                            <input className={st.input}
                                   type="text" placeholder={'e-mail'}/>

                            <textarea className={st.textarea}
                                      placeholder={'Сообщение'}/>

                            <button className={st.buttonSubmit} type='submit'>ОТПРАВИТЬ</button>
                        </form>
                    </Zoom>
                </div>


            </div>


        </div>
    )
}