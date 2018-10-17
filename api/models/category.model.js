
const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

let categorySchema = new Schema({
	name : {type:String, required: true, max: 100},
	posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],

})

module.exports = mongoose.model('Category',categorySchema);