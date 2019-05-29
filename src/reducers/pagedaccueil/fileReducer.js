import { GET_FILE, DELETE_FILE } from 'actions/types'

const initialState = {
	file: []
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_FILE:
			return {
				...state,
				file: action.payload
			}

		case DELETE_FILE:
			return {
				...state,
				posts: state.files.filter((file) => file !== action.payload)
			}

		default:
			return state
	}
}
