import React from 'react';
import st from './Work.module.css';

type WorkType = {
    title: string
    description: string
}
export const Work = (props: WorkType) => {
    return (
        <div className={st.work}>
            <h4>{props.title}</h4>

            < div className={st.placeForWork}></div>

            <span>{props.description}</span>
        </div>
    )
}