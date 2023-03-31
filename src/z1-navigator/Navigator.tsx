import React from 'react';
import st from './Navigator.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll'

export const Navigator = () => {
    return (
        <div className={st.navigator}>
            <a href="">главная</a>
            <Link
                activeClass={st.active}
                to="skils"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
               навыки
            </Link>

            <Link
                activeClass={st.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                проэкты
            </Link>

            <Link
                activeClass={st.active}
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                контакты
            </Link>
        </div>
    )
}