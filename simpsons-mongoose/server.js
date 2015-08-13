
//MODULES
var express = require('express'); 
var cors = require('cors'); 
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose'); 


//CONTROLLERS

var SimpsonsCtrl = require('./controllers/SimpsonsCtrl'); 

//EXPRESS
var app = express(); 

app.use(bodyParser.json()); 
app.use(cors()); 

//Routes
app.post('/simpson', SimpsonsCtrl.create); 
app.get('/simpson', SimpsonsCtrl.create); 
app.put('/simpson', SimpsonsCtrl.create); 
app.delete('/simpson', SimpsonsCtrl.create); 

//Connections
var port = 11331
var mongoURi = 'mongodb://localhost:27017/springfield';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});




app.listen(port, function() {
	console.log("Listening on port: " + port)
}); 