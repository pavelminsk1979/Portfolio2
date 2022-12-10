import React from 'react';
import st from './WorkExampl.module.css';
import stCommon from '../common/styles/stuleCommonContainer.module.css';
import { Work } from './work/Work';


export const WorkExampl = () => {
    return (
        <div className={st.commonWorkExampl}>
            <div className={`${stCommon.commonFrame} ${st.containerWorkExampl}`}>
                <h3 className={st.title}>
                    Мои работы
                </h3>
                <div className={st.workExamplBlok}>
                    <Work title={'какоето 1 название'} description={'ну и какоето там 1 увлекательное описание чтоб читающий не саскочил а прям аж страшно сильно захотел проэкт посмотреть'}/>
                    <Work title={'какоето 2 название'} description={'ну и какоето там 2 увлекательное описание чтоб читающий не саскочил а прям аж страшно сильно захотел проэкт посмотреть'}/>
                    <Work title={'какоето 3 название'} description={'ну и какоето там 3 увлекательное описание чтоб читающий не саскочил а прям аж страшно сильно захотел проэкт посмотреть'}/>
                    <Work title={'какоето 4 название'} description={'ну и какоето там 4 увлекательное описание чтоб читающий не саскочил а прям аж страшно сильно захотел проэкт посмотреть'}/>
                </div>
            </div>
        </div>
    )
}