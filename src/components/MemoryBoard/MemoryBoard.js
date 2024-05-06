import style from './MemoryBoard.module.css';
import {useState} from "react";
import MemoryCard from "../MemoryCard/MemoryCard";
const MemoryBoard = ({memoryCards, newGame, setNewGame}) => {

    const[solvedPair, setSolvedPair] = useState(0);
    const[openedCard, setOpenedCard] = useState(-1);

    if(solvedPair === 12){
        setSolvedPair(0);
        setTimeout(() =>{
                alert('Вы прошли игру, поздравляю!');
                setNewGame(!newGame);
        }, 1000);

    }


    return(
        <div className={style.board} >
            {
                memoryCards.map((card, index) =>
                        <MemoryCard key={index}
                                    index={index}
                                    card={card}
                                    openedCard={openedCard}
                                    setOpenedCard={setOpenedCard}
                                    memoryCards={memoryCards}
                                    solvedPair={solvedPair}
                                    setSolvedPair={setSolvedPair}
                        />
                )
            }
        </div>
    );
}

export default MemoryBoard;