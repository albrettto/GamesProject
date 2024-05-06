import style from './WelcomeBlock.module.css'

const WelcomeBlock = () => {

    return(
        <div className={style.welcomeBlock}>
            <div className={style.entry} id={style.dots}>
                <div className={style.title}>
                    Интеллектуальный рай для любителей поломать голову
                </div>
            </div>
        </div>
    )
}

export default WelcomeBlock