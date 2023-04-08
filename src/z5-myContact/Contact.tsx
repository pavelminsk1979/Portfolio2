import React from 'react';
import st from './Contact.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {Fade} from 'react-awesome-reveal';
import {PhoneMailTelegram} from "./PhoneMailTelegram";
import phoneImage from "../assets/image/phone.png";
import telegramImage from "../assets/image/telegram.jpg";
import mailImage from "../assets/image/mail.png";
import { useFormik } from 'formik';
import axios from 'axios';
/*import emailjs from '@emailjs/browser';*/




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



    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',

        },
        onSubmit: values => {
            axios.post('http://localhost:3010/message', {
                email: values.email,
                name: values.name,
                message: values.message
            }).then(() => {
                alert('Спасибо, что проявили интерес к моей персоне! Я обязательно свяжусь с вами.')
                formik.resetForm()
            })
                .finally(() => {
                    formik.resetForm()
                })
        },

    })


    return (
        <div id='contact' className={st.commonСontact}>

            <div className={`${stCommon.commonFrame} ${st.containerСontact}`}>

                <div className={st.left}>
                    <PhoneMailTelegram
                        style={phoneFoto}
                        text='+375 29 645 78 48'/>
                    <PhoneMailTelegram
                        link='https://t.me/pavelminsk1979' /*не надо прописывать  @**/
                    style={telegramFoto}
                    text='@pavelminsk1979'/>
                    <PhoneMailTelegram
                        style={mailFoto}
                        text='pavelminsk1979@mail.ru'/>
                </div>

                <div className={st.right}>
                    <Fade>
                        <form
                            onSubmit={formik.handleSubmit}
                            className={st.mail}>

                        <label>
                            <input className={st.input}
                                   type="text"
                                   placeholder={'Имя'}
                                   {...formik.getFieldProps('name')}/>
                        </label>

                            <label>
                                <input className={st.input}
                                       type="text"
                                       placeholder={'e-mail'}
                                       {...formik.getFieldProps('email')}/>
                            </label>

                            <label>
                                 <textarea className={st.textarea}
                                           placeholder={'Сообщение'}
                                           {...formik.getFieldProps('message')}/>
                            </label>


                            <button className={st.buttonSubmit} type='submit'>ОТПРАВИТЬ</button>
                        </form>
                    </Fade>
                </div>
            </div>
        </div>
    )
}




/*export const Contact = () => {

    const phoneFoto = {
        backgroundImage: `url(${phoneImage})`,
    }

    const telegramFoto = {
        backgroundImage: `url(${telegramImage})`,
    }

    const mailFoto = {
        backgroundImage: `url(${mailImage})`,
    }


    export const ContactUs = () => {
        /!*const form = useRef();*!/

        const sendEmail = (e: any) => {
                 e.preventDefault();

                 emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
                     .then((result) => {
                         console.log(result.text);
                     }, (error) => {
                         console.log(error.text);
                     });
        };


        return (
            <div id='contact' className={st.commonСontact}>

                <div className={`${stCommon.commonFrame} ${st.containerСontact}`}>

                    <div className={st.left}>
                        <PhoneMailTelegram
                            style={phoneFoto}
                            text='+375 29 645 78 48'/>
                        <PhoneMailTelegram
                            link='https://t.me/pavelminsk1979' /!*не надо прописывать  @*!/
                            style={telegramFoto}
                            text='@pavelminsk1979'/>
                        <PhoneMailTelegram
                            style={mailFoto}
                            text='pavelminsk1979@mail.ru'/>
                    </div>

                    <div className={st.right}>
                        <Fade>
                            <form
                                onSubmit={sendEmail}
                                className={st.mail}>

                                <input className={st.input}
                                       type="text"
                                       placeholder={'Имя'}
                                       name="user_name"/>
                                <input className={st.input}
                                       type="text"
                                       placeholder={'email'}
                                       name="user_email"/>

                                <textarea className={st.textarea}
                                          placeholder={'Сообщение'}
                                          name="message"/>
                                <input type="submit"
                                       value="Send"/>
                                {/!* <button className={st.buttonSubmit} type='submit'>ОТПРАВИТЬ</button>*!/}
                            </form>
                        </Fade>
                    </div>
                </div>
            </div>
        )
    }
}*/

/*<form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
</form>*/


/*export const Contact = () => {

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
                        link='https://t.me/pavelminsk1979' /!*не надо прописывать  @*!/
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
}*/

