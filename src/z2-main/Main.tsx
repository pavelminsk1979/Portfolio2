import React from 'react';
import st from './Main.module.scss';
import stComonFrame from '../common/styles/stuleCommonContainer.module.css';
import myFotoImage from "../assets/image/myFoto.jpg";
import itIncubatorImage from "../assets/image/itIncubator.png";
import Fade, { Bounce } from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";




export const Main = () => {
    const myFoto = {
        backgroundImage: `url(${myFotoImage})`,
    }
    const itIncubatorFoto = {
        backgroundImage: `url(${itIncubatorImage})`,
    }
    return (
        <div className={st.main}>

            <div className={`${stComonFrame.commonFrame} ${st.frame}`}>
                <Fade >
                <div className={st.text}>
                    <div>Приветствую!</div>
                    <div>Меня зовут Павел</div>
                    <div>

                        <ReactTypingEffect
                            text={["Hello.", "World!"]}
                        />

                        <span className={st.smallText}>Я работаю</span>
                        <div><span className={st.frontend}>Frontend</span>
                            <span>- разработчиком</span>



                        </div>
                    </div>

                    <p>
                        Погружался в мир программирования самостоятельно, после прошёл обучение и стажировку и остаюсь в сообществе
                    </p>
                    <div style={itIncubatorFoto} className={st.incubatorFoto}></div>

                </div>
                </Fade>
                <Bounce>
                    <div style={myFoto} className={st.foto}></div>
                </Bounce>

            </div>
        </div>
    )
}