const mongoose = require('mongoose')

const FileSchema = mongoose.Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId
	},

	file: {
		type: String
	}
})

module.exports = mongoose.model('File', FileSchema)
