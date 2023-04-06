import React from 'react';
import st from './Contact.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {Fade} from 'react-awesome-reveal';
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
        <div id='contact' className={st.commonСontact}>

            <div className={`${stCommon.commonFrame} ${st.containerСontact}`}>

                <div className={st.left}>
                    <PhoneMailTelegram
                        style={phoneFoto}
                        text='+375 29 645 78 48'/>
                    <PhoneMailTelegram
                        link='https://t.me/pavelminsk1979' /*не надо прописывать  @*/
                        style={telegramFoto}
                        text='@pavelminsk1979'/>
                    <PhoneMailTelegram
                        style={mailFoto}
                        text='pavelminsk1979@mail.ru'/>
                </div>

                <div className={st.right}>
                    <Fade>
                        <form className={st.mail}>
                            <input className={st.input}
                                   type="text" placeholder={'Имя'}/>
                            <input className={st.input}
                                   type="text" placeholder={'e-mail'}/>

                            <textarea className={st.textarea}
                                      placeholder={'Сообщение'}/>

                            <button className={st.buttonSubmit} type='submit'>ОТПРАВИТЬ</button>
                        </form>
                    </Fade>
                </div>


            </div>


        </div>
    )
}