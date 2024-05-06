import style from './Quiz.module.css'
import {useState} from "react";
import { Modal } from '@consta/uikit/Modal';
import {Button} from "@consta/uikit/Button";
import {Text} from "@consta/uikit/Text";

const Quiz = ({data, numberOfQuestion, setNumberOfQuestion, points, setPoints, newGame, setNewGame}) => {

    const[isSelected, setIsSelected] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const nextQuestion = () => {
        const btns = document.getElementsByClassName(style['button-variant']);
        if(numberOfQuestion === 10){
            setIsModalOpen(true);
        } else {
            if(isSelected){
                setNumberOfQuestion(numberOfQuestion+1);
                for (let btn of btns) {
                    btn.className = style['button-variant'];
                }
                setIsSelected(false);
            } else {
                for (let btn of btns){
                    btn.className += ' ' + style['button-variant_trambling']
                    setTimeout(() => {
                        btn.className = style['button-variant'];
                    }, 400)
                }
            }
        }
    }

    const checkAnswer = (e) => {
        if(!isSelected)
            if(e.target.innerHTML === data.answer){
                e.target.className += ' ' + style['button-variant_selected-true'];
                setIsSelected(true);
                setPoints(points+1);
            } else {
                e.target.className += ' ' + style['button-variant_selected-false'];
                const btns = document.getElementsByClassName(style['button-variant']);
                for (let btn of btns) {
                    if(btn.innerHTML === data.answer)
                        btn.className += ' ' + style['button-variant_selected-true'];
                }
                setIsSelected(true);
            }
    }

    const startNewGame = () => {
        setNewGame(!newGame);
        setPoints(0);
        setNumberOfQuestion(1);
        const btns = document.getElementsByClassName(style['button-variant']);
        for (let btn of btns) {
            btn.className = style['button-variant'];
        }
        setIsSelected(false);
    }


    return(
        <div className={style.quiz}>
            <div className={style['container-question']}>
                <p className={style.question}>Вопрос №{numberOfQuestion}</p>
                <p className={style.title}>{data.country}</p>
            </div>
            <img src={data.flag} className={style.image} alt={'flag'}/>
            <div className={style.variants}>
                <button className={style['button-variant']} onClick={checkAnswer}>{data.variants[0]}</button>
                <button className={style['button-variant']} onClick={checkAnswer}>{data.variants[1]}</button>
                <button className={style['button-variant']} onClick={checkAnswer}>{data.variants[2]}</button>
                <button className={style['button-variant']} onClick={checkAnswer}>{data.variants[3]}</button>
            </div>
            <button className={style['button-next']} onClick={nextQuestion}>Следующий вопрос</button>
            <button className={style['button-next']} onClick={startNewGame}>Новая викторина</button>

            <Modal
                isOpen={isModalOpen}
                hasOverlay
                onClickOutside={() => setIsModalOpen(false)}
                onEsc={() => setIsModalOpen(false)}
                className={style.modal}
            >
                <p className={style['modal-text']}>Ваше количество баллов: {points} из 10</p>
                <div className={style['modal-container-button']}>
                    <Button
                        size="m"
                        view="primary"
                        label="Закрыть"
                        width="default"
                        onClick={() => setIsModalOpen(false)}
                    />
                </div>
            </Modal>
        </div>

    )
}

export default Quiz;