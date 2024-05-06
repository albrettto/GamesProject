import ShulteTable from "../components/ShulteTable/ShulteTable";
import NavPanel from "../components/NavPanel/NavPanel";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {useState} from "react";
import ShulteMenu from "../components/ShulteMenu/ShulteMenu";

const Shulte = ({theme, setTheme, cards, setCards}) => {

    const[number, setNumber] = useState(7);
    const[reset, setReset] = useState(false);
    const[updateData, setUpdateData] = useState(false);
    const[state, setState] = useState('initial')

    const style = {
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        marginInline: '300px',
        gap: '150px',
        alignItems: 'center',
        height: '95vh',
    }


    return (
        <DndProvider backend={HTML5Backend}>
            <NavPanel
                theme={theme}
                setTheme={setTheme}
                cards={cards}
                setCards={setCards}
            />
            <div style={style}>
                <ShulteTable
                    number={number}
                    reset={reset}
                    updateData={updateData}
                    setState={setState}
                />
                <ShulteMenu
                    number={number}
                    setNumber={setNumber}
                    reset={reset}
                    setReset={setReset}
                    updateData={updateData}
                    setUpdateData={setUpdateData}
                    state={state}
                    setState={setState}
                />
            </div>
        </DndProvider>
    )
}

export default Shulte;