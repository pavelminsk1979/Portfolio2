import React from 'react';
import {Fade} from 'react-awesome-reveal';
import st from './Project.module.scss';

type WorkType = {
    title: string
    description: string
    style: any
}
export const Project = (props: WorkType) => {
    return (
        <Fade>
            <div className={st.block}>
                <div className={st.left}>

                    <h3>{props.title}</h3>
                </div>

                <div
                    style={props.style}
                    className={st.right}>
                </div>

            </div>
        </Fade>
    )
}