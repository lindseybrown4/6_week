

////////DEPENDENCIES////////////

var express = require('express'); 
var bodyParser = require('body-parser'); 

var app = express(); 
var port = 8080; 

app.listen(port, function() {
	console.log("I am watching you on... " + port); 
}); 
///////

