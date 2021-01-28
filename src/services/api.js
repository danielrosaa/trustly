import Axios from 'axios'

const axios = Axios.create({
	baseURL: "https://strapi-api-danielrosa.herokuapp.com/",
})

export default axios