import './App.css';
import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Shulte from "./pages/Shulte";
import Minesweeper from "./pages/Minesweeper";
import Countries from "./pages/Countries";
import InProgress from "./pages/InProgress/InProgress";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import Memory from "./pages/Memory";

function App() {

    const startCards = [
        {name: "Shulte", image: "images/cards/toy-photo-camera-back.svg", url: '/GamesProject/shulte', size: 1, color: 'base'},
        {name: "Сапёр", image: "images/cards/entertaining-game.svg", url: '/GamesProject/minesweeper', size: 1, color: 'base'},
        {name: "Память", image: "images/cards/shapes-educational-toy.svg", url: '/GamesProject/memory', size: 1, color: 'base'},
        {name: "Викторина", image: "images/cards/abc-educational-book.svg", url: '/GamesProject/quiz', size: 1, color: 'base'},
        {name: "Судоку", image: "images/cards/games-machine.svg", url: '/GamesProject/inProgress', size: 1, color: 'base'},
        {name: "Set", image: "images/cards/toy-shapes.svg", url: '/GamesProject/inProgress', size: 1, color: 'base'},
        {name: "Takuzu", image: "images/cards/puzzle-piece-shape-handmade-draw.svg", url: '/GamesProject/inProgress', size: 1, color: 'base'},
        {name: "Математика", image: "images/cards/worm-animal-toy.svg", url: '/GamesProject/inProgress', size: 1, color: 'base'},
        {name: "Поиск слова", image: "images/cards/funny-toy-robot.svg", url: '/GamesProject/inProgress', size: 1, color: 'base'},
        {name: "Анаграмма", image: "images/cards/bouncing-ball-toy.svg", url: '/GamesProject/inProgress', size: 1, color: 'base'},
        {name: "Camp", image: "images/cards/bear-toy.svg", url: '/GamesProject/inProgress', size: 1, color: 'base'},
        {name: "Kuromasu", image: "images/cards/toy-object.svg", url: '/GamesProject/inProgress', size: 1, color: 'base'}
    ]

    const [cards, setCards] = useState(
        JSON.parse(window.localStorage.getItem('cards')) || JSON.parse(JSON.stringify(startCards))
    );

    const [theme, setTheme] = useState(
        window.localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
    }, [theme])

    useEffect(() => {
        window.localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards])

  return (
      <Theme className={theme === 'dark' ? "App dark-mode" : "App"} preset={presetGpnDefault}>
            <BrowserRouter>
                <Routes >
                    <Route path="/GamesProject/" element={
                        <Main
                            theme={theme}
                            setTheme={setTheme}
                            startCards={startCards}
                            cards={cards}
                            setCards={setCards}
                        />}
                    />
                    <Route path="/GamesProject/shulte" element={
                        <Shulte theme={theme}
                                setTheme={setTheme}
                                cards={cards}
                                setCards={setCards}
                        />}
                    />
                    <Route path="/GamesProject/minesweeper" element={
                        <Minesweeper theme={theme}
                                     setTheme={setTheme}
                                    cards={cards}
                                    setCards={setCards}
                        />}
                    />
                    <Route path="/GamesProject/quiz" element={
                        <Countries theme={theme}
                                   setTheme={setTheme}
                                     cards={cards}
                                     setCards={setCards}
                        />}
                    />
                    <Route path="/GamesProject/memory" element={
                        <Memory theme={theme}
                                   setTheme={setTheme}
                                   cards={cards}
                                   setCards={setCards}
                        />}
                    />
                    <Route path="/GamesProject/inProgress" element={
                        <InProgress theme={theme}
                                    setTheme={setTheme}
                                     cards={cards}
                                     setCards={setCards}
                        />}
                    />
                </Routes>
            </BrowserRouter>
        </Theme>
  );
}

export default App;
