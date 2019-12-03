import axios from "axios";

// The getGames method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getGames: function(query) {
    return axios.get("/api/games", { params: { q: query } });
  }
};