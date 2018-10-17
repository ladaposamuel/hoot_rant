const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {type: String, required: true, max: 100},
    username: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
	status: {type:Number},
	created_at:  { type: Date, default: Date.now },
})


module.exports = mongoose.model('User',userSchema)
