import React from 'react';
import st from './Projects.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import { Project } from './project/Project';
import todoImage from '../assets/image/todol.jpg'
import socialImage from '../assets/image/social.png'
import trainImage from '../assets/image/train.jpg'
import diplomImage from '../assets/image/diplom.jpg'



export const Projects = () => {
    const social = {
        backgroundImage:`url(${socialImage})`,
    }
    const todol = {
        backgroundImage:`url(${todoImage})`,
    }
    const train = {
        backgroundImage:`url(${trainImage})`,
    }
    const diplom = {
        backgroundImage:`url(${diplomImage})`,
    }
    return (
        <div id='projects' className={st.commonWorkExampl}>
            <div className={stCommon.commonFrame}>

                <div className={st.workExamplBlok}>
                    <Project
                        link={'https://pavelminsk1979.github.io/samurai/#/'}
                        style={social}
                        title={'Social network'}/>

                    <Project
                        link={''}
                        style={todol}
                        title={'Todolist'}/>

                    <Project
                        link={'https://pavelminsk1979.github.io/counter/'}
                        style={train}
                        title={'Counter'}/>

                    <Project
                        link={'https://pavelminsk1979.github.io/repeatTodolist2/'}
                        style={diplom}
                        title={'Pекламный проэкт'}/>
                </div>
            </div>
        </div>
    )
}