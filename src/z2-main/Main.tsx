import React from 'react';
import st from './Main.module.scss';
import stComonFrame from '../common/styles/stuleCommonContainer.module.css';
import myFotoImage from "../assets/image/myFoto.jpg";
import ReactTypingEffect from "react-typing-effect";
import  {Fade} from "react-awesome-reveal";
import { Tilt } from 'react-tilt'


export const Main = () => {
    const myFoto = {
        backgroundImage: `url(${myFotoImage})`,
    }

    return (
        <div className={st.main}>

            <div className={`${stComonFrame.commonFrame} ${st.frame}`}>
                <Fade>
                    <div className={st.textBlok}>
                        <div className={st.hello}>
                            <span >Приветствую,</span>
                            <span className={st.name}> я Павел!</span>
                        </div>
                        <span className={st.smallText}>моя работа</span>

                        <div className={st.bigText}>
                            <div className={st.frontend}>FRONTEND</div>
                            <ReactTypingEffect
                                text={["РАЗРАБОТЧИК"]}
                            />
                        </div>
                    </div>
                </Fade>
                <Fade  >
                    <Tilt options={{max:25,scale:1}} >
                        <div style={myFoto} className={st.foto}></div>
                    </Tilt>

                </Fade >

            </div>
        </div>
    )
}