import React from 'react';
import st from './Skils.module.scss';
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
import axiosImage from "../assets/image/axios.png";
import gitImage from "../assets/image/git.jpg";


export const Skils = () => {

    const JSFoto = {
        backgroundImage: `url(${JSImage})`,
    }

    const reactFoto = {
        backgroundImage: `url(${reactImage})`,
    }

    const TSFoto = {
        backgroundImage: `url(${TSImage})`,
    }

    const htmlCssFoto = {
        backgroundImage: `url(${htmlCssImage})`,
    }

    const reduxFoto = {
        backgroundImage: `url(${reduxImage})`,
    }

    const storybookFoto = {
        backgroundImage: `url(${storybookImage})`,
    }

    const MaterialUiFoto = {
        backgroundImage: `url(${MaterialUiImage})`,
    }

    const axiosFoto = {
        backgroundImage: `url(${axiosImage})`,
    }

    const gitFoto = {
        backgroundImage: `url(${gitImage})`,
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
                    <ItemSkil style={axiosFoto}/>
                    <ItemSkil style={gitFoto}/>
                    <ItemSkil style={MaterialUiFoto}/>
                </div>
            </div>
        </div>
    );
}