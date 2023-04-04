import React from 'react';
import st from './PhoneMailTelegram.module.css';

type PhoneMailTelegramType = {
    text: string
    style?: any
    link?:string
}

export const PhoneMailTelegram = (props: PhoneMailTelegramType) => {
    return (
        <div className={st.frame}>

            <a href={props.link}>
                <div className={st.picture}
                     style={props.style}>
                </div>
            </a>

            <div>{props.text}</div>
        </div>
    )
}

/*<a href='https://t.me/@pavelminsk1979'>
    <div className={st.picture}
         style={props.style}>
    </div>
</a>*/

