var http=require("http");
var server=http.createServer(function(request,response)
{
    if(request.url=="/")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>Hello hi</h1>");
        response.end("<html><body> home URL: "+request.url+"</body></html>");
    }
    else if(request.url=="/student")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>How are you?</h1>");
        response.end("<html><body> student URL: "+request.url+"</body></html>");
    }
    else if(request.url=="/admin")
    {
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write("<h1>Sign in!!</h1>");
        response.end("<html><body> admin URL: "+request.url+"</body></html>");
    }
    else
    {
        response.end("Invalid Request");
    }
    
});
server.listen(3000);
console.log("Server running");