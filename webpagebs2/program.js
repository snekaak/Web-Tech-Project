// Creating Ownmodule//

var http=require('http');
var dt=require('./mymodule');

http.createServer(function(req,res)
{
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("The date and time are currently: "+dt.myDateTime());
    res.end();
}).listen(3500);
console.log("Server running");