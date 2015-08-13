var express = require('express'); 
var cors = require('cors'); 
var mongojs = require('mongojs')
var bodyParser = require('body-parser'); 



var db = mongojs('ecommerce', ['products']);
var port = 3000;

var app = express(); 
app.use(bodyParser.json()); //takes json and turn it into a js object and put it on the request object

app.post('/api/products', function(req, res) { //post = save() or insert()
	db.products.save(req.body, function(err, result) { //second parameter is a callback funciton that we dont have to add but it will let us know if we have an error
		if (err) {
			return res.status(500).json(err);
		}
		else {
			return res.json(result); 
		}
	}); 

});

app.get('/api/products', function(req, res) { //get = find                        	
	// console.log("get works in console too"); 
	// res.json({message: "get endpoint works"}); //(req.query.id);
	db.products.find(req.query, function(err, result){
		if(!err) {
			res.json(result); 
		} else {
			res.status(500).json(err);
		}
	});
	
}); 

app.delete('/api/products/', function(req, res) { //delete = remove
		if(!req.query.id) {
		res.status(400).send("No UID sent");
		}
		db.products.remove({
			_id: mongojs.ObjectId(req.query.id)
		}, function(err, result){
		if(!err){
			res.status(418).json(result); 
		} else {
			res.status(500).json(err)
		}
	});
}); 

//############################
// app.delete('/api/products/', function(req, res) {
// 	db.products.remove(req.query, function(err, result){
// 		if(err) return res.status(500).json(err);
// 			return res.json(result)
// 	})
// });
//###################


app.put('/api/products', function(req, res) { //put = findAndModify
		if(!req.query.id){
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongojs.ObjectId(req.query.id)
	};
	db.products.update(query, req.body, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	})
});


app.listen(port, function(err){
    if (err) {
    	console.log('Error: ' + err);
    } else {
    	console.log('Listening to server on port: ' + port);
    }
});