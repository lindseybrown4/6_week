

///////////////////////////////////////
////////      DEPENDENCIES      ///////
///////////////////////////////////////

var express = require('express'); 
var bodyParser = require('body-parser'); 
var cors = require('cors'); 
var request = require('request');
var twilio = require('twilio'); 

var app = express(); 
var port = 8080; 

///////////////////////////////////////
////////      MIDDLEWARE     //////////
///////////////////////////////////////

app.use(express.static('public'));   // giving the browser the public folder
// app.use(bodyParser());  //-------normal
app.use(bodyParser.urlencoded({
	extended: true
})); 

app.use(bodyParser.json()); 
app.use(cors()); 

var message = [{
	"message": "HELLO WORLD!!!!"
}
]; 

///////////////////////////////////////
////////      ENDPOINTS    ////////////
///////////////////////////////////////

app.get('/api/message', function(req, res){
	// return res.send({"message": "HELLO WORLD!!!!!"})
	return res.json(message); 
}); 

app.post('/api/send_text_message', function(req, res) {
	console.log(req.body.message); 
	// var newMessage = req.body.message;
	// messages.push(newMessage);
	res.send(); 
}); 

app.listen(port, function() {
	console.log("I am watching you on... " + port); 
}); 


