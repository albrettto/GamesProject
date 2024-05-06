import {HTML5Backend} from "react-dnd-html5-backend";
import NavPanel from "../components/NavPanel/NavPanel";
import {DndProvider} from "react-dnd";
import {Loader} from "@consta/uikit/Loader";
import {useEffect, useState} from "react";
import Api from "../api/Api";
import MemoryBoard from "../components/MemoryBoard/MemoryBoard";

const Memory = ({theme, setTheme, cards, setCards}) => {

    const[memoryCards, setMemoryCards] = useState([]);
    const[newGame, setNewGame] = useState(true);

    useEffect(() => {
        getMemoryCards().then(value =>
        {
            const combinedArray = Object.values(value).reduce((accumulator, currentValue) => accumulator.concat(currentValue));
            const memory = combinedArray.map(value => {return {value: value, state: 'closed'}})
            setMemoryCards(memory)
        })
    }, [newGame]);

    const getMemoryCards = async () => {
        const data = await Api.generateMemory(8, 3);
        return data.grid;
    }

    const getGameOrLoader = () => {
        if(memoryCards.length === 0)
            return <Loader size="m" />
        else
            return <MemoryBoard
                memoryCards={memoryCards}
                newGame={newGame}
                setNewGame={setNewGame}
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

export default Memory;
