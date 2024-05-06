import style from './ShulteMenu.module.css'
import { Slider } from '@consta/uikit/Slider';
import {useEffect, useState} from "react";

const ShulteMenu = ({number, setNumber, reset, setReset, updateData, setUpdateData, state, setState}) => {

    const [value, setValue] = useState(number);
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        setNumber(value);
    }, [value])


    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive]);

    useEffect(() => {
        if(state === 'initial'){
            setIsActive(false);
            setTime(0);
        } else if(state === 'began'){
            handleStart();
        } else {
            handleStop();
        }
    }, [state]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        // alert(`Вы прошли эту игру за ${timer()}`);
        setIsActive(false);
    };

    const handleReset = () => {
        setState('initial');
        setIsActive(false);
        setTime(0);
        setReset(!reset)
    };

    const handleChangeData = () => {
        setUpdateData(!updateData);
    }

    const timer = () => {
        return `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${("0" + Math.floor((time / 1000) % 60)).slice(-2)}.${("0" + ((time / 10) % 100)).slice(-2)}`
    }


    return (
        <div className={style.menu}>
            <div>
                <div className={style.timer}>
                    {timer()}
                </div>
                <Slider
                    className={style.slider}
                    view="division"
                    label={`Выберите размер поля: ${value}`}
                    onChange={setValue}
                    value={value}
                    range={false}
                    min={5}
                    max={10}
                    step={1}
                    size='l'
                />
            </div>
            <div className={style.buttons}>
                <button className={style.button} onClick={() => handleReset()}>Начать сначала</button>
                <button className={style.button} onClick={() => handleChangeData()}>Сгенерировать новую последовательность</button>
            </div>

        </div>
    )
}

export default ShulteMenu;