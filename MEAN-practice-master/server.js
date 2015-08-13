// DEPENDENCIES
var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var cors = require('cors');

//Local IMPORTS

var SightingCtrl = require('./api/controllers/SightingCtrl'); 

// SERVER
var app = express();
var data = {'message': 'These birds are cool!'};

// MongoDB CONNECTION
var port = (process.env.PORT, process.env.IP) || 5050;
var mongoUri = 'mongodb://localhost:27017/miniBirds'; 

mongoose.set('debug', true); 
mongoose.connect(mongoUri); 
mongoose.connection.once('open', function(){
	console.log('MongoDB connected at: ', mongoUri);
})


// MIDDLEWARE - Every single request that comes in goes through middleware first!!!!!
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

// ENDPOINTS
app.get('/api/birds', SightingCtrl.read); //    instead of this because of controllers ('/api/birds', function(req, res) {
app.post('/api/birds', SightingCtrl.create); 
app.put('/api/birds/:id', SightingCtrl.update);
app.delete('/api/birds/:id', SightingCtrl.delete); 
 


app.listen(port);
console.log('I am creepy. I like to watch you...', port);


