import Axios from './api'

export async function Product(id) {
		const { data } = await Axios.get(`/sneakers/${id}`)
		return data
}
