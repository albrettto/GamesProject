import style from './GameCard.module.css'
import {Link} from "react-router-dom";
import { useDrop } from 'react-dnd'
import {ItemTypes} from "../../ItemTypes";
const GameCard = ({card}) => {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.ICON,
        drop: () => ({ name: card.name}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))

    const isActive = canDrop && isOver

    let border = '1px solid var(--border-color)'
    if (isActive) {
        border = '3px dashed var(--text-color)'
    }

    const color = card.color;

    let size = 'normal';
    if(card.size === 2){
        size = 'enlarged';
    }
    if(card.size === 3){
        size = 'doubleEnlarged';
    }

    const className = `${style.card} ${style[size]}`;
    const modifiedColor = `${style[color]}`;

    const message = new Audio("/telegram-message.mp3");
    message.volume = 0.5;

    const playSound = () => {
        setTimeout(() => {
            message.play();
        }, 2400);

        setTimeout(() => {
            message.play();
        }, 4000);
    }

    return(
        <div className={className} ref={drop} data-testid="gamecard" style={{ ...style, border }}>
            <div className={`${style.images} ${modifiedColor}`} style={{ ...style }}>
               <img src={card.image} className={`${style.image} ${modifiedColor}`} alt={'Card cover'}/>
            </div>
            <Link to={card.url} className={style.link} onClick={card.url === 'inProgress' ? playSound : ''}>{card.name}</Link>
        </div>
    )
}

export default GameCard