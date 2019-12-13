/* import axios from 'axios'

// TODO: Find way to move this to config
const baseURL = process.env.REACT_APP_API_BASE_URL
  ? process.env.REACT_APP_API_BASE_URL
  : 'http://localhost:3001/' // use when in DEV
// const baseURL = "" // use when in PROD

export default {
  getPopularGames: async function () {
    const response = await axios.get(`${baseURL}bga-api/popular`)
    return response.data
  },
  search: async function (query) {
    const response = await axios.get(`${baseURL}bga-api/search`, {
      params: { name: query }
    })
    return response.data
  }
} */
