import Axios from './api'

export default {
	listar: () => {
		return Axios.get("/sneakers")
	}
}
