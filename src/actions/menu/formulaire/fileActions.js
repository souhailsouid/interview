import axios from 'axios'

import { GET_FILE, GET_ERRORS } from 'actions/types'

// Get current Caroussel
export const getCurrentfile = () => (dispatch) => {
	axios.get('/api/file/').then((res) =>
		dispatch({
			type: GET_FILE,
			payload: res.data
		})
	)
}

export const getCurrentfile_id = (id) => (dispatch) => {
	axios
		.get(`/api/file/${id}`)
		.then((res) =>
			dispatch({
				type: GET_FILE,
				payload: res.data
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_FILE,
				payload: null
			})
		)
}

// Add Comment
export const updatefile = (id, Data, picture) => (dispatch) => {
	const config = { headers: { 'Content-Type': 'multipart/form-data' } }
	let fd = new FormData()
	fd.append('picture', picture)

	axios.patch(`/api/file/${id}`, Data, config, fd).then((res) => res.data).catch((err) =>
		dispatch({
			type: GET_ERRORS,
			payload: {}
		})
	)
}
