/**
 * Read files:
 *      fs.readFile()
 * Create files:
 *      fs.appendFile()
        fs.open()
        fs.writeFile()
 * Update files:
 *      fs.appendFile()
        fs.writeFile()
 * Delete files
 *      fs.unlink()
 * Rename files
 *      fs.rename()
 **/
var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, ({'Content-Type': 'text/html'}));
        res.write(data);
        res.end();
    });
}).listen(8080);