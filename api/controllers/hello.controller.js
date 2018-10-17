const Product = require('../models/hello.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
	var data = {
	'message' : 'Hello world',
	}
    res.send(data);
};