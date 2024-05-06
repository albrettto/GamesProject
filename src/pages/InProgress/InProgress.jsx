import NavPanel from "../../components/NavPanel/NavPanel";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import style from './InProgress.module.css'
import {useState} from "react";

const InProgress = ({theme, setTheme, cards, setCards}) => {

    const [firstMessage, setFirstMessage] = useState(false);
    const [secondMessage, setSecondMessage] = useState(false);
    const [thirdMessage, setThirdMessage] = useState(false);
    const [isVideoPlay, setIsVideoPlay] = useState(false);
    const [audio, setAudio] = useState(new Audio("/pedro.mp3"));

    setTimeout(() => {
        setFirstMessage(true);
    }, 1000);

    setTimeout(() => {
        setSecondMessage(true);
    }, 2400);

    setTimeout(() => {
        setThirdMessage(true);
    }, 4000);


    const playAndPause = (e) => {
        if(!isVideoPlay){
            setIsVideoPlay(true);
            if(audio.currentTime === 0)
                e.target.currentTime = 0;
            e.target.play();
            audio.volume = 0.3;
            audio.play();
        } else {
            setIsVideoPlay(false);
            e.target.pause();
            audio.pause();
        }
    }

    const playEnd = () => {
        setIsVideoPlay(false);
        audio.currentTime = 0;
    }

    audio.addEventListener('ended', playEnd);



    return (
        <DndProvider backend={HTML5Backend} className={style.page}>
            <NavPanel
                theme={theme}
                setTheme={setTheme}
                cards={cards}
                setCards={setCards}
            />
            <div className={style.container}>
                <p className={style.title}>Страница находится в разработке</p>
                <div className={style.telegram}>
                    <div className={firstMessage ? style['container-message-send'] : style['none']}>
                        <p className={style['message-send']}>Ну что там со страницей?</p>
                    </div>
                    <div className={secondMessage ? style['container-message-received'] : style['none']}>
                        <p className={style['message-received']}>Делаю!</p>
                    </div>
                    <video src={'/images/Pedro.mp4'} muted autoPlay loop className={thirdMessage ? (isVideoPlay ? `${style.pedro} ${style['pedro-played']}` : style.pedro) : style['none']} onClick={playAndPause} onEnded={playEnd}/>
                </div>
            </div>
        </DndProvider>
    )
}

export default InProgress;