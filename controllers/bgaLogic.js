
const axios = require("axios");
const apiKey = process.env.BGAAPIKEY

module.exports = {
    findPopular: function(req, res) {
        console.log("we are here")
        axios.get("https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&ascending=false&limit=10&client_id=" + apiKey).then(response => res.json(response));
    },
    search: function(req, res) {
        axios.get("https://www.boardgameatlas.com/api/search?&ascending=false&limit=10&client_id=" + apiKey + "&name=" + req.body)
        .then(response => res.json(response))
    }
}