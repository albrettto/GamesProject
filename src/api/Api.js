import axios from 'axios'

export default class Api {
    static async generateShulte(size) {
        const response = await axios.get(`https://shadify.dev/api/schulte/generator?size=${size}`);
        return response.data.grid;
    }

    static async generateMinesweeper(startPosition) {
        const response = await axios.get(`https://shadify.dev/api/minesweeper/generator?start=${startPosition}`);
        return response.data.board;
    }

    static async generateQuiz(amount) {
        const response = await axios.get(`https://shadify.dev/api/countries/capital-quiz?amount=${amount}`);
        return response.data;
    }

    static async generateMemory(width, height) {
        const response = await axios.get(`https://shadify.dev/api/memory/generator?pair-size=2&width=${width}&height=${height}`);
        return response.data;
    }
}