import React from 'react';
import st from './Projects.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import { Project } from './project/Project';
import todoImage from '../assets/image/todol.jpg'
import socialImage from '../assets/image/social.png'
import trainImage from '../assets/image/train.jpg'
import darkTopicImage from '../assets/image/dark2.jpg'



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
    const darkTopic = {
        backgroundImage:`url(${darkTopicImage})`,
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
                        link={'https://pavelminsk1979.github.io/mainTodolist/'}
                        style={todol}
                        title={'Todolist'}/>

                    <Project
                        link={'https://pavelminsk1979.github.io/counter/'}
                        style={train}
                        title={'Counter'}/>

                    <Project
                        link={'https://pavelminsk1979.github.io/repeatTodolist2/'}
                        style={darkTopic}
                        title={'Dark Theme'}/>
                </div>
            </div>
        </div>
    )
}