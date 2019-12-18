import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : "http://localhost:3001/"

export default {
    saveGame: async function(gameObj) {
        const response = await axios.post(`${baseURL}api/games`, gameObj)
        return response.data;
    },
    findGames: async function(gameObj) {
        const response = await axios.get(`${baseURL}api/games`, {params: gameObj});
        return response.data;
    },
    deleteGame: async function(gameObj) {
        const response = await axios.delete(`${baseURL}api/games/` + gameObj.id, {params: gameObj})
        return response.data;
    }
}