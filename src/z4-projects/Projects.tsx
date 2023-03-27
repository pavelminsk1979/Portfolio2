import React from 'react';
import st from './Projects.module.scss';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import { Project } from './project/Project';
import {Title} from "../common/components/title/Title";
import todoImage from '../assets/image/todolist.jpg'
import socialImage from '../assets/image/social.jpg'
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
        <div className={st.commonWorkExampl}>
            <div className={`${stCommon.commonFrame} ${st.containerWorkExampl}`}>

                    <Title title={'МОИ  РАБОТЫ'}/>

                <div className={st.workExamplBlok}>
                    <Project
                        style={social}
                        title={'какоето 1 название'}
                        description={'ну и какоето там 1 увлекательное описание чтоб читающий '}/>
                    <Project
                        style={todol}
                        title={'какоето 2 название'}
                        description={'ну и какоето там 2 увлекательное описание чтоб читающий не саскочил а прям аж страшно сильно захотел проэкт посмотреть'}/>
                    <Project
                        style={train}
                        title={'какоето 3 название'}
                        description={'ну и какоето там 3 увлекательное описание чтоб читающий не саскочил а прям аж страшно сильно захотел проэкт посмотреть'}/>
                    <Project
                        style={diplom}
                        title={'какоето 4 название'}
                        description={'ну и какоето там 4 увлекательное описание чтоб читающий не саскочил а прям аж страшно сильно захотел проэкт посмотреть'}/>
                </div>
            </div>
        </div>
    )
}