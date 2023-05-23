var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var address = querystring.parse(data1)["address"];
console.log(address);
var email = querystring.parse(data1)["email"];
console.log(email);
var gender = querystring.parse(data1)["gender"];
console.log(gender);
var mobile = querystring.parse(data1)["mobile"];
console.log(mobile);
var selectpets = querystring.parse(data1)["selectpets"];
console.log(selectpets);

if (request.url === '/login') {
module.authenticateUser(name, email, response);
            } 
else if (request.url === '/save') {
module.saveUser(email,address,gender,mobile,selectpets, response);
            } 
      });
    
}).listen(5000);
console.log("Server started");