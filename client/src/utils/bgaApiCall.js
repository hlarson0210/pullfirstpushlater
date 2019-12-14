import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : "http://localhost:3001/"

export default {
    getPopularGames: async function() {
        const response = await axios.get(`${baseURL}bga-api/popular`)
        return response.data;
    },
    search: async function(query) {
        const response = await axios.get(`${baseURL}bga-api/search`, {params: {name: query}});
        return response.data;
    }
}