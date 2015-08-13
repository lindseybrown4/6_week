var Simpson = require('../models/Simpson'); 

module.exports = {
	create: function(req, res) {
		var newSimpson = new Simpson(req.body);
		newSimpson.save(function(err, result) {
			if (err) return res.status(500).json(err);
			return res.json(result); 
		}); 
	}
}; 

// var schema = new mongoose.