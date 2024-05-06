import styles from './SetBoard.module.css';
import {useState} from "react";
import SetCard from "../SetCard/SetCard";
const SetBoard = (props) => {

    const [cards, setCards] = useState(
        [
            {
                'number': 1,
                'shape': 'oval',
                'color': 'red',
                'shading': 'solid'
            },
            {
                'number': 2,
                'shape': 'oval',
                'color': 'red',
                'shading': 'striped'
            },
            {
                'number': 3,
                'shape': 'oval',
                'color': 'red',
                'shading': 'open'
            },
            {
                'number': 1,
                'shape': 'squiggle',
                'color': 'red',
                'shading': 'solid'
            },
            {
                'number': 1,
                'shape': 'oval',
                'color': 'red',
                'shading': 'solid'
            },
            {
                'number': 1,
                'shape': 'diamond',
                'color': 'green',
                'shading': 'solid'
            },
            {
                'number': 1,
                'shape': 'diamond',
                'color': 'purple',
                'shading': 'solid'
            },
            {
                'number': 1,
                'shape': 'diamond',
                'color': 'red',
                'shading': 'striped'
            },
            {
                'number': 1,
                'shape': 'diamond',
                'color': 'red',
                'shading': 'open'
            }
    ]
    );


    return(
        <div className={styles.board} >
            {
                cards.map(card => <SetCard
                    number={card.number}
                    shape={card.shape}
                    color={card.color}
                    shading={card.shading}
                    key={`${card.number}_${card.shape}_${card.color}_${card.shading}`}
                />)
            }
        </div>
    );
}

export default SetBoard;