import React, {useState} from 'react';
import st from './BurgerNavigator.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll'
import burgerImage from "../assets/image/burger.png";


export const BurgerNavigator = () => {
    const [showMode, setShowMode] = useState(false)
    const onClickHundler = () => {
        setShowMode(!showMode)
    }

    const burgerFoto = {
        backgroundImage: `url(${burgerImage})`,
    }

    return (
        <div className={st.burgerNavigator}>

            <div
                style={burgerFoto}
                onClick={onClickHundler}
                className={st.button}>
            </div>

            {showMode && <div className={st.link}>
                <Link
                    activeClass={st.active}
                    to=""
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}>
                    главная
                </Link>
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
            </div>}

        </div>
    )
}