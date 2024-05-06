import style from './DraggableIcon.module.css'
import {ItemTypes} from "../../ItemTypes";
import {useDrag} from "react-dnd";
const DraggableIcon = ({src, name, cards, setCards}) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.ICON,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()

            if (item && dropResult) {
                const newCards = cards.map(card => {
                    if(card.name === dropResult.name){
                        if(item.name === 'Mushroom' && card.size < 3){
                            card.size += 1;
                        }
                        if(item.name === 'Bottle' && card.color === 'base'){
                            card.color = 'modified';
                        } else if (item.name === 'Bottle' && card.color === 'modified'){
                            card.color = 'doubleModified';
                        }
                        if(item.name === 'Reset'){
                            card.color = 'base';
                            card.size = 1;
                        }
                    }
                    return card;
                })
                setCards(newCards);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))

    const opacity = isDragging ? 0 : 1

    return(
        <>
            <img src={src} alt={'icon'} className={style.image} ref={drag} style={{ ...style, opacity }} data-testid={`icon`}/>
        </>
    )
}

export default DraggableIcon;