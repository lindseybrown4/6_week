

///////////////////////////////////////
////////      DEPENDENCIES      ///////
///////////////////////////////////////

var express = require('express'); 
var bodyParser = require('body-parser'); 
var cors = require('cors'); 
var request = require('request');
var twilio = require('twilio'); 

var accountSid = ''; 
var authToken = ''; 
 
var client = require('twilio')(accountSid, authToken); 

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

var message = {"message": "HELLO WORLD!!!!"}


///////////////////////////////////////
////////      ENDPOINTS    ////////////
///////////////////////////////////////

app.get('/api/message', function(req, res){
	// return res.send({"message": "HELLO WORLD!!!!!"})
	return res.json(message); 
}); 

app.post('/api/send_text_message', function(req, res) {
	console.log(req.body.message); 
	// request.post('https://' + accountSid + ':' + authToken + '@api.twilio.com/2010-0-01/Accounts/')


		client.messages.create({ 
		to: "8185220057", 
		from: "+18183517988", 
		body: "You Rock at this stuff",   
	}, function(err, message) { 
	   console.log(message.sid); 
	});
}); 





app.listen(port, function() {
	console.log("I am watching you on... " + port); 
}); 


