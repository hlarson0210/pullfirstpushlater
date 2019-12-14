import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : "http://localhost:3001/"

export default {
    userSignIn: async function(userObj) {
        const response = await axios.post(`${baseURL}api/users/signin`, userObj)
        return response.data;
    },
    userSignUp: async function(userObj) {
        const response = await axios.post(`${baseURL}api/users/signup`, userObj);
        return response.data;
    }
}