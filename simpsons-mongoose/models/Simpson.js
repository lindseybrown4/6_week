var mongoose = require('mongoose'); 

var schema = new mongoose.Schema({
	name: {type: String, required: true, maxlength: 63},
	size: {type: String, enum: ["S", "M", "L"], index: true},
	gender: {type: String, enum: ["F", "M", "O"]},  
	occupation: {type: String, maxlength: 30}, 
	funniness: {type: Number, min: 1, max: 10}

}); 

module.exports = mongoose.model('Simpson', schema);

// {
// 	"name": 'Bart',
// 	"size": 'M',
// 	"gender": 'M',
// 	"occupation": 'punk'
// 	"funniness": 7
// }