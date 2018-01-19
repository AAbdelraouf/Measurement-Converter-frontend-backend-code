var express = require('express');
var app = express();

var port = process.env.PORT || 3000

app.use(express.static('public'));
app.use(express.static('aboutPage'));

//calling the about us route
var things = require('./aboutPage.js');
app.use('/about', things);

// reading files
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/htmlFile.html')  
});

// setting up the port to listen on
app.listen(port);


