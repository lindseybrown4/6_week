///////////////////////////////////////
////////      DEPENDENCIES      ///////
///////////////////////////////////////

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors'); 


var accountSid = 'AC486ef3f9933ad9689b598773ff99d226'; 
var authToken = '17d9fd68edef8ce2d4d04f88ed763276'; 

var twilio = require('twilio')(accountSid, authToken); 
var Firebase = require('firebase'); 

var ref = new Firebase('https://text-support1.firebaseIO.com/numbers'); 

var app = express(); 
var port = 9000; 

///////////////////////////////////////
////////      MIDDLEWARE     //////////
///////////////////////////////////////

app.use(express.static(__dirname + '/public'));   // giving the browser the public folder
// app.use(bodyParser());  //-------normal
// app.use(bodyParser.urlencoded({
// 	extended: true
// })); 

app.use(bodyParser.json()); 
app.use(cors()); 
 


///////////////////////////////////////3
////////      ENDPOINTS    ////////////
///////////////////////////////////////

app.post('/api/support', function(req, res) {
	console.log(req.body.message); 
}); 

app.listen(port, function(error){
	if (error) {
		console.log("Error: " + error);
	} else {
		console.log("listen to server on..." + port); 
	}
});


