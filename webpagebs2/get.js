http=require('http');
url=require('url');
querystring = require('querystring');

function sam(request,response)
{
	console.log('URL '+request.url+' received.');
	
	var path = url.parse(request.url).pathname;
	console.log('Request for '+path+' received.');
	//console.log('Request for '+request.url+' received.');
	
	var query =url.parse(request.url).query;
	console.log(query);
	
	qs=querystring.parse(query)
	console.log(qs);

	var name = qs["username"];
	var email=qs["email"];
	
	response.write('Hello '+name+', your email id '+email+' has been registered successfully');
	response.end();
}
http.createServer(sam).listen(8000);
console.log('Server has Started…….');