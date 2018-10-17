const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

let PostSchema = new Schema({
	message : String,
	date: { type: Date, default: Date.now },
	created_by : { type: Schema.Types.ObjectId, ref: 'User' },
	category : { type: Schema.Types.ObjectId, ref: 'Category' },
	tags : { type: Schema.Types.ObjectId, ref: 'Tag' },
	votes : { type: Schema.Types.ObjectId, ref: 'Vote' },
	status : String,
})

module.exports = mongoose.model('Post',PostSchema)
