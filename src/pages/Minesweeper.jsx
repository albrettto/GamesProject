import NavPanel from "../components/NavPanel/NavPanel";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import Api from "../api/Api";
import {useEffect, useState} from "react";
import MinesweeperGame from "../components/MinesweeperGame/MinesweeperGame";
import {Loader} from "@consta/uikit/Loader";


const Minesweeper = ({theme, setTheme, cards, setCards}) => {

    const[minesweeperGrid, setMinesweeperGrid] = useState([]);

    useEffect(() => {
        getGrid().then(value => setMinesweeperGrid(value))
    }, []);

    const getGrid = async () => {
        const data = await Api.generateMinesweeper('3-3');
        return data;
    }

    const getGameOrLoader = () => {
        if(minesweeperGrid.length === 0)
            return <Loader size="m" />
        else
            return <MinesweeperGame
                minesweeperGrid={minesweeperGrid}
            />
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <NavPanel
                theme={theme}
                setTheme={setTheme}
                cards={cards}
                setCards={setCards}
            />
            {getGameOrLoader()}
        </DndProvider>
    )
}

export default Minesweeper;