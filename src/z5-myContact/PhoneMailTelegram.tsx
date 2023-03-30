import React from 'react';
import st from './PhoneMailTelegram.module.css';

type PhoneMailTelegramType = {
    text:string
    style?:any
}

export const PhoneMailTelegram = (props:PhoneMailTelegramType) => {
  return(
      <div  className={st.frame}>

          <div className={st.picture}
              style={props.style}>
          </div>

          <div>{props.text}</div>
      </div>
  )
}