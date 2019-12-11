import axios from "axios";


export default {
    getPopularGames: function() {
        return axios.get("/bga-api/popular");
    },
    search: function(query) {
        return axios.get("bga-api/search", {data: {name: query}});
    }
}