var express = require('express'); 
var cors = require('cors'); 
var mongojs = require('mongojs')
var bodyParser = require('body-parser'); 

var app = express(); 
app.use(bodyParser.json()); //takes json and turn it into a js object and put it on the request object


var db = mongojs('birds', ['sightings']);
//var port = [mongod port from cmd];
var port = 3000;

app.post('/api/sighting', function(req, res) { //post = save() or insert()
	db.sightings.save(req.body, function(err, result) { //second parameter is a callback funciton that we dont have to add but it will let us know if we have an error
		if (err) {
			return res.status(500).json(err);
		}
		else {
			return res.json(result); 
		}
	}); 
});

app.get('/api/sighting', function(req, res) { //get = find
	console.log(req.query);
	db.sightings.find(req.query, function(err, result){ //find is your query method // empty object means "I want everythingn"
		if(!err) {
			res.json(result); 
		} else {
			res.status(500).json(err);
		}
	});
}); 

app.delete('/api/sighting', function(req, res) { //deliete = remove
		if(!req.query.id) {
			res.status(400).send("No UID sent");
		}
		db.sightings.remove({
			_id: mongojs.ObjectId(req.query.id)
		}, function(err, result){
		if(!err){
			res.status(418).json(result); 
		} else {
			res.status(500).json(err)
		}
	});
});

app.put('/api/sighting', function(req, res) { //put = findAndModify
	db.sightings.findAndModify({
	    query: { 
	    	_id: mongojs.ObjectId(req.query.id) 
	    },
	    update: { 
	    	$set: { 
	    		name: req.query.name,
	    		order: req.query.order,
	    		status: req.query.status
	    	}
	    },
	    new: true
		}, function (err, updated) {
				if(!err) {
					res.status(200).json(updated); 
				} else {
					res.status(500).json(err);
				}
		});
});


app.listen(port, function(err){
    if (err) {
    	console.log('Error: ' + err);
    } else {
    	console.log('Listening to server on port: ' + port);
    }
});