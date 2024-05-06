import style from './MinesweeperGame.module.css'
const MinesweeperGame = ({minesweeperGrid}) => {

    const getRows = () => {
        let rows = [];
        for(let i = 0; i < minesweeperGrid.length; ++i){
            rows.push(<div className={style.row} key={i}>
                {getElements(i)}
            </div>)
        }
        return rows;
    }

    const handleClick = (e) => {
        if(e.target.id !== 'MinesweeperGame_flagged__MSldm')
            e.target.id = "MinesweeperGame_opened__EKBbf"
    }

    const rightClick = (e) => {
        e.preventDefault();

        if(e.target.id !== 'MinesweeperGame_opened__EKBbf'){
            if(e.target.id === 'MinesweeperGame_flagged__MSldm')
                e.target.id = 'MinesweeperGame_closed__rl+1b'
            else
                e.target.id = "MinesweeperGame_flagged__MSldm"
        }
    }

    const getElements = (row) => {
        return minesweeperGrid[row].map((value, index) => (
            <button
                className={style.cell}
                id={style.closed}
                onClick={handleClick}
                onContextMenu={rightClick}
                key={`${row}-${index}`}
            >
                {value}
            </button>
        ));
    }

    return (
        <div className={style.container}>
            {getRows()}
        </div>
    )
}

export default MinesweeperGame;