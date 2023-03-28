import React from 'react';
import st from './Main.module.scss';
import stComonFrame from '../common/styles/stuleCommonContainer.module.css';
import myFotoImage from "../assets/image/myFoto.jpg";
import itIncubatorImage from "../assets/image/itIncubator.png";
import Fade, {Bounce} from "react-awesome-reveal";
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
                <Fade>
                    <div className={st.textBlok}>
                        <div>
                            <span>Приветствую,</span>
                            <span className={st.name}> я Павел!</span>
                        </div>
                        <span className={st.smallText}>моя работа</span>

                        <div className={st.bigText}>
                            <ReactTypingEffect
                                text={["FRONTEND", "РАЗРАБОТЧИК"]}
                            />

                        </div>

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