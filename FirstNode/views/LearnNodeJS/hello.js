//require http
var http = require('http');

//create a server
http.createServer(function(req, res){
    res.writeHead(200, {'Contest-Type': 'text/plain'}); //Write a response to the client
    res.write("Hello World"); //Writes Hello World
    res.write(req.url);
    res.end(); //End the response
}).listen(8080); //the server object listen on port 8080