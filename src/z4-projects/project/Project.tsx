import React from 'react';
import {Fade} from 'react-awesome-reveal';
import st from './Project.module.scss';

type WorkType = {
    title: string
    style: any
}
export const Project = (props: WorkType) => {
    return (
        <Fade>
            <a className={st.block} href={'https://pavelminsk1979.github.io/Portfolio2/'}>
                <div className={st.left}>
                    <h3 className={st.titleProject}>{props.title}</h3>
                    <div>вход на презентацию проекта</div>
                </div>

                <div
                    style={props.style}
                    className={st.right}>
                </div>

            </a>
        </Fade>
    )
}