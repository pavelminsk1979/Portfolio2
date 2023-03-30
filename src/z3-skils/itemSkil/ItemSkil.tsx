import React from 'react';
import {Fade} from 'react-awesome-reveal';
import st from './itemSkil.module.scss';


type ItemSkilType = {
    nameSkil: string
    percent: string
    fractionLineWite: string
    fractionLineColor: string
    colorLine:string
}

export const ItemSkil = (props: ItemSkilType) => {
    return (
        <Fade>
            <div className={st.block}>
                <div className={st.text}>
                    <div>{props.nameSkil}</div>
                    <div>{props.percent}</div>
                </div>
                <div className={st.line}>
                    <div
                        className={st.lineColor}
                        style={{flexGrow: props.fractionLineColor,
                            backgroundColor: props.colorLine,
                        }}
                    ></div>

                    <div
                        className={st.lineWhite}
                        style={{flexGrow: props.fractionLineWite}}></div>
                </div>
            </div>
        </Fade>

    )
}

