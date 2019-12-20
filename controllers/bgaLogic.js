const axios = require('axios')
const apiKey = process.env.BGA_APIKEY

module.exports = {
  findPopular: function (req, res) {
    axios
      .get(
        'https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&ascending=false&limit=10&client_id=' +
          apiKey
      )
      .then(response => res.json(response.data.games))
      .catch(err => res.json(err))
  },
  search: function (req, res) {
    axios
      .get(
        'https://www.boardgameatlas.com/api/search?&ascending=false&limit=10&client_id=' +
          apiKey +
          '&name=' +
          req.query.name
      )
      .then(response => res.json(response.data.games))
      .catch(err => res.json(err))
  }
}
