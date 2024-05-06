import NavPanel from "../components/NavPanel/NavPanel";
import WelcomeBlock from "../components/WelcomeBlock/WelcomeBlock";
import GamesTable from "../components/GamesTable/GamesTable";
import Footer from "../components/Footer/Footer";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Main = ({theme, setTheme, startCards, cards, setCards}) => {


    return(
        <DndProvider backend={HTML5Backend}>
            <NavPanel
                theme={theme}
                setTheme={setTheme}
                cards={cards}
                setCards={setCards}
            />
            <WelcomeBlock/>
            <GamesTable cards={cards}/>
            <Footer setCards={setCards} startCards={startCards}/>
        </DndProvider>
    )
}

export default Main;