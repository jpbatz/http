// create http server

// importing nodejs http module
var http = require('http');
var server = http.createServer(function (req, res) {
  // incoming request ip address
  // who connection is from (who is client?)
  console.log('request from', req.connection.remoteAddress); 

  // writing the respoinse header
  res.writeHead(200, {'Content-Type': 'application/json', 'Arbitrary-Headers' : 'I am Groot'});

  console.log(req);
  console.log(req.url);
  console.log(req.method);

  // json doc
  var test_document = { "test" : "Hello World"};

  // sends data through the socket to the client
  res.end( JSON.stringify(test_document) );

});

server.listen(1337, '167.216.15.216');  // or public ip address
//server.listen(1337, '127.0.1');  // or public ip address

// feedback that server is running
console.log('Server running at http://127.0.0.1:1337/');