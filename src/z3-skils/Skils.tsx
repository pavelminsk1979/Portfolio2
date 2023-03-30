import React from 'react';
import st from './Skils.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import {ItemSkil} from "./itemSkil/ItemSkil";



export const Skils = () => {

    return (
        <div className={st.commonSkil}>
            <div className={stCommon.commonFrame}>


                <div className={st.skilsBlok}>
                    <div className={ st.leftBlok}>
                        <ItemSkil
                            colorLine={'#f7d16f'}
                            fractionLineWite={'3'}
                            fractionLineColor={'7'}
                        percent={'70%'}
                            nameSkil={'JavaScript'}/>

                        <ItemSkil
                            colorLine={'#f7d16f'}
                            fractionLineWite={'3'}
                            fractionLineColor={'7'}
                        percent={'70%'}
                            nameSkil={'React'}/>

                        <ItemSkil
                            colorLine={'#f7d16f'}
                            fractionLineWite={'4'}
                            fractionLineColor={'6'}
                        percent={'60%'}
                            nameSkil={'HTML&CSS'}/>

                        <ItemSkil
                            colorLine={'#f7d16f'}
                            fractionLineWite={'1'}
                            fractionLineColor={'9'}
                        percent={'90%'}
                            nameSkil='Rest API' />

                        <ItemSkil
                            colorLine={'#f7d16f'}
                            fractionLineWite={'2'}
                            fractionLineColor={'8'}
                        percent={'80%'}
                            nameSkil={'GitHub'}/>
                    </div>

                    <div className={st.rightBlok}>
                        <ItemSkil
                            colorLine={'#383b40'}
                            fractionLineWite={'5'}
                            fractionLineColor={'5'}
                        percent={'50%'}
                            nameSkil={'TypeScript'}/>

                        <ItemSkil
                            colorLine={'#383b40'}
                            fractionLineWite={'3'}
                            fractionLineColor={'7'}
                        percent={'70%'}
                            nameSkil={'StoryBook'}/>

                        <ItemSkil
                            colorLine={'#383b40'}
                            fractionLineWite={'2'}
                            fractionLineColor={'8'}
                        percent={'80%'}
                            nameSkil={'Redux'}/>

                        <ItemSkil
                            colorLine={'#383b40'}
                            fractionLineWite={'4'}
                            fractionLineColor={'6'}
                        percent={'60%'}
                            nameSkil={'UniTest'}/>

                        <ItemSkil
                            colorLine={'#383b40'}
                            fractionLineWite={'7'}
                            fractionLineColor={'3'}
                        percent={'30%'}
                            nameSkil={'Angular'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}