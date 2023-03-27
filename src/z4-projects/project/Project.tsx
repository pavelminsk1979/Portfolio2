import React from 'react';
import { Fade } from 'react-awesome-reveal';
import st from './Project.module.scss';

type WorkType = {
    title: string
    description: string
    style:any
}
export const Project = (props: WorkType) => {
    return (
        <Fade >
        <div className={st.work}>

            < div
                style={props.style}
                className={st.placeForWork}></div>

            <h3>{props.title}</h3>

            <span>{props.description}</span>

        </div>
        </Fade >
    )
}