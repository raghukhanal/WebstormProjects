var http = require('http');
var fs = require('fs');

//http.createServer(function(req, res) {
   /* //Create file called filceCreateCreadedthis.txt and write some text in it
    fs.appendFile('fileCreateCreatedThis.txt',"This is written in FileCreate.js!",
        function(err){
        if(err) throw err;
        console.log("Saved!");
        });
     */
   //create a new, empty file called mynewOpenFile.txt using the open()
 /*   fs.open('mynewOpenFile.txt', 'w', function(err, file){
        if(err) throw err;
        console.log('Saved!');
    });*/
// }).listen(8080);

//Create a new file using writeFile()
/*
    fs.writeFile('mynewfileWriteFile.txt', 'Hello content!',
        function(err){
        if(err) throw err;
        console.log("Saved!");
        });
*/
/*//Update the text that sis in mynewWriteFile.txt using appendFile: Currently has Hello content in it and add rest of the text..
fs.appendFile('mynewfileWriteFile.txt', 'Updated this file using fs.appendFile() from FileCreate.js file',
    function(err){
    if(err) throw err;
    console.log("Updated File!");
    });*/

//Replace all content in mynewOpenFile.txt which currently has "unreplaced" in it.
/*
fs.writeFile('mynewOpenFile.txt', 'This is replaced text!',
    function(err){
        if(err) throw err;
        console.log("Replaced");
    });
*/

/*//Create gonna delete it file
fs.writeFile('gonnaDeleteIt.txt', 'Hello content!',
    function(err){
        if(err) throw err;
        console.log("Saved!");
    });*/

//Delete the gonnaDeleteit.txt file
/*
fs.unlink('gonnaDeleteIt.txt', function(err){
    if (err) throw err;
    console.log("Deleted gonnaDeleteIt.txt");
});
*/

//Renames mynewOpenFile.txt to renamedMynewOpenFile.txt
fs.rename('mynewOpenFile.txt', 'renamedMynewOpenFile.txt',
    function(err) {
        if (err) throw err;
        console.log("Renamed!");
    });