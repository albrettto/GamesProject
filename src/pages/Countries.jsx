import NavPanel from "../components/NavPanel/NavPanel";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import Api from "../api/Api";
import {useEffect, useState} from "react";
import {Loader} from "@consta/uikit/Loader";
import Quiz from "../components/Quiz/Quiz";


const Countries = ({theme, setTheme, cards, setCards}) => {

    const[quiz, setQuiz] = useState([]);
    const[numberOfQuestion, setNumberOfQuestion] = useState(1);
    const[points, setPoints] = useState(0);
    const[newGame, setNewGame] = useState(true);

    useEffect(() => {
        getQuestions().then(value => setQuiz(value))
    }, [newGame]);

    const getQuestions = async () => {
        const data = await Api.generateQuiz(10);
        return data;
    }

    const getGameOrLoader = () => {
        if(quiz.length === 0)
            return <Loader size="m" />
        else
            return <Quiz
                data={quiz[numberOfQuestion-1]}
                numberOfQuestion={numberOfQuestion}
                setNumberOfQuestion={setNumberOfQuestion}
                points={points}
                setPoints={setPoints}
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

export default Countries;