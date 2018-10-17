
const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

let voteSchema = new Schema({
	type : String,
	voter : { type: Schema.Types.ObjectId, ref: 'User' },
	post : { type: Schema.Types.ObjectId, ref: 'Post' },
})

module.exports = mongoose.model('Vote',voteSchema);