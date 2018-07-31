var url = require('url');

var address = 'http://localhost:8080/default.htm?year=2017&month=february';
// parse: returns a URL object with each part of the address
var q = url.parse(address, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month= 'february' }
console.log(qdata.month); //returns 'february'