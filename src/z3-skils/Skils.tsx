import React from 'react';
import st from './Skils.module.css';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {ItemSkil} from "./itemSkil/ItemSkil";
import {Title} from "../common/components/title/Title";
import JSImage from "../assets/image/js.jpeg";
import reactImage from "../assets/image/react.jpg";
import TSImage from "../assets/image/typeScript.jpg";
import htmlCssImage from "../assets/image/htmlCss.png";
import reduxImage from "../assets/image/redux.png";
import storybookImage from "../assets/image/storybook.jpg";
import MaterialUiImage from "../assets/image/MI.png";


export const Skils = () => {

    const JSFoto = {
        backgroundImage:`url(${JSImage})`,
    }

    const reactFoto = {
        backgroundImage:`url(${reactImage})`,
    }

    const TSFoto = {
        backgroundImage:`url(${TSImage})`,
    }

    const htmlCssFoto = {
        backgroundImage:`url(${htmlCssImage})`,
    }

    const reduxFoto = {
        backgroundImage:`url(${reduxImage})`,
    }

    const storybookFoto = {
        backgroundImage:`url(${storybookImage})`,
    }

    const MaterialUiFoto = {
        backgroundImage:`url(${MaterialUiImage})`,
    }


    return (
        <div className={st.commonSkil}>
            <div className={`${stCommon.commonFrame} ${st.skilsContainer}`}>

                <Title title={'ЗНАНИЯ'}/>

                <div className={st.skilsBlok}>
                    <ItemSkil style={JSFoto}/>
                    <ItemSkil style={reactFoto}/>
                    <ItemSkil style={TSFoto}/>
                    <ItemSkil style={htmlCssFoto}/>
                    <ItemSkil style={reduxFoto}/>
                    <ItemSkil style={storybookFoto}/>
                    <ItemSkil style={MaterialUiFoto}/>
                    <ItemSkil/>
                </div>
            </div>
        </div>
    );
}