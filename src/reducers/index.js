import { combineReducers } from 'redux'

import errorReducer from './errorReducer'

import fileReducer from './pagedaccueil/fileReducer'

export default combineReducers({
	errors: errorReducer,
	file: fileReducer
})
