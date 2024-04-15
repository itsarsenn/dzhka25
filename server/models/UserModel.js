const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: false
	}
	
})

const UserModel = mongoose.model('users', userShema)

module.exports = UserModel