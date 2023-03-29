import React from 'react';
import st from './Skils.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {ItemSkil} from "./itemSkil/ItemSkil";
import {Title} from "../common/components/title/Title";



export const Skils = () => {

    return (
        <div className={st.commonSkil}>
            <div className={stCommon.commonFrame}>


                <div className={st.skilsBlok}>
                    <div className={ st.leftBlok}>
                        <ItemSkil />
                        <ItemSkil />
                        <ItemSkil />
                        <ItemSkil />
                        <ItemSkil />
                    </div>

                    <div className={st.rightBlok}>
                        <ItemSkil />
                        <ItemSkil />
                        <ItemSkil />
                        <ItemSkil />
                        <ItemSkil />
                    </div>
                </div>
            </div>
        </div>
    );
}