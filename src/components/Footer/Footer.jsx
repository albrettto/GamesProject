import style from '../Footer/Footer.module.css'

const Footer = ({setCards, startCards}) => {

    const resetStyles = () => {
        setCards(startCards);
    }

    return (
        <footer>
            <p>&#169; Copyright 2024</p>
            <div className={style["buttons-links"]}>
                <a href={"https://github.com/albrettto"}>
                    <img src={'icons/github.svg'} className={style['link-icon']} alt={'icon'}/>
                </a>
                <a href={"https://t.me/albrettto"}>
                    <img src={'icons/telegram.svg'} className={style['link-icon']} alt={'icon'}/>
                </a>
                <button className={style['button-reset']} onClick={resetStyles}>Сбросить</button>
            </div>
        </footer>
    )
}

export default Footer;