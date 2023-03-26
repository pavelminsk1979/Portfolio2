import React from 'react';
import st from './Main.module.scss';
import stComonFrame from '../common/styles/stuleCommonContainer.module.css';
import myFotoImage from "../assets/image/myFoto.jpg";
import itIncubatorImage from "../assets/image/itIncubator.png";


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
                <div className={st.text}>
                    <div>Приветствую!</div>
                    <div>Меня зовут Павел</div>
                    <div>
                        <span>Я работаю</span>
                        <div>Frontend-разработчиком</div>
                    </div>

                    <p>
                        Погружался в мир программирования самостоятельно, потом прошёл обучение
                          и стажировку в минской школе
                    </p>
                    <div style={itIncubatorFoto} className={st.incubatorFoto}></div>
                   {/* <p>
                      Работаю в этой компании ментором и участвовую в разработке внутренних продуктов.
                    </p>*/}
                </div>
                <div style={myFoto} className={st.foto}></div>
            </div>
        </div>
    )
}