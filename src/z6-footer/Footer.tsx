import React from 'react';
import st from './Footer.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import itIncubatorImage from "../assets/image/itIncubator.png";
import mercedesImage from "../assets/image/mers11.jpg";
import heidelImage from "../assets/image/heidel.png";

export const Footer = () => {

    const itIncubatorFoto = {
        backgroundImage: `url(${itIncubatorImage})`,
    }

    const mercedesFoto = {
        backgroundImage: `url(${mercedesImage})`,
    }

    const heidelFoto = {
        backgroundImage: `url(${heidelImage})`,
    }

    return (
        <div className={st.commonFooter}>
            <div className={`${stCommon.commonFrame} ${st.blokFooter}`}>

                <div className={st.elem}></div>


                <div className={st.logo}>
                    <div>
                        <div className={st.incubatorFoto}
                             style={itIncubatorFoto}></div>
                        <div className={st.heidelFoto}
                             style={heidelFoto}></div>
                    </div>
                    <div>
                        <div className={st.mercedesFoto}
                             style={mercedesFoto}></div>
                    </div>

                </div>

            </div>
        </div>
    )
}