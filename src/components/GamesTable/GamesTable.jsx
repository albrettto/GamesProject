import style from './GamesTable.module.css'
import GameCard from "../GameCard/GameCard";
const GamesTable = ({cards}) => {

    return(
        <div className={style.table}>
            {
                cards.map(card => <GameCard card={card} key={card.name} />)
            }
        </div>
    )
}

export default GamesTable