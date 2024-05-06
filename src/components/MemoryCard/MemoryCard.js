import style from './MemoryCard.module.css'

const MemoryCard = ({index, card, openedCard, setOpenedCard, memoryCards, solvedPair, setSolvedPair}) => {

    const rotateCard = (e) => {
        if(openedCard === -1){
            if(card.state === "closed") {
                setOpenedCard(index)
                card.state = "opened";
            }
        } else {
            if(card.state === "closed") {
                card.state = "opened";

                if(card.value !== memoryCards[openedCard].value){
                    setTimeout(() => {
                        card.state = "closed";
                        memoryCards[openedCard].state = "closed";
                    }, 0o0)
                } else {
                    setSolvedPair(solvedPair + 1);
                }
                setOpenedCard(-1);
            }
        }
    }

    return(
        <div className={style.card} onClick={rotateCard}>
            <div className={card.state === 'closed' ? style["card-inner"] : `${style["card-inner"]} ${style["card-rotated"]}`}>
                <div className={style.front}>
                </div>
                <div className={`${style.back} ${style[card.value]}`}>
                </div>
            </div>
        </div>
    );
}

export default MemoryCard;