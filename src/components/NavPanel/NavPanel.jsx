import style from './NavPanel.module.css'
import Mushroom from '../../icons/mushroom.svg'
import Bottle from '../../icons/bottle.svg'
import Reset from '../../icons/reset.svg'
import {useState} from "react";
import {Link} from "react-router-dom";
import DraggableIcon from "../DraggableIcon/DraggableIcon";
const NavPanel = ({theme, setTheme, cards, setCards}) => {

    const [isSticky, setIsSticky] = useState(false);

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 0) {
            setIsSticky(true)
        } else {
            setIsSticky(false);
        }
    }

    const changeMode = () => {
        if(theme === 'dark'){
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return(
        <nav className={isSticky ? style.sticky : ''}>
            <Link to={'/GameProject/'} className={style['logo-link']}>Game Project</Link>
            <div className={style["nav-element_right"]}>
                <div className={style.mode} onClick={changeMode}>
                    <img src={theme === 'dark' ? 'icons/moon.svg' : 'icons/sun.svg'} className={style.icon}  alt={'icon'}/>
                    Mode
                </div>
                <div className={style.images}>
                    <DraggableIcon src={Mushroom}
                                   name={'Mushroom'}
                                   cards={cards}
                                   setCards={setCards}
                    />
                    <DraggableIcon src={Bottle}
                                   name={'Bottle'}
                                   cards={cards}
                                   setCards={setCards}
                    />
                    <DraggableIcon src={Reset}
                                   name={'Reset'}
                                   cards={cards}
                                   setCards={setCards}
                    />
                </div>
            </div>

        </nav>
    )
}

export default NavPanel