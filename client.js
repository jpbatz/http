// import nodejs http module
var http = require('http');

//console.log(process.argv[2]);
//console.log(process.argv[3]);

// if not defines, default assignment
var host = process.argv[2] || 'localhost';
var port = process.argv[3] || 1337;

console.log(host, port);


// run app with arguments


// create http request
var options = { hostname : host, port : port };
//var options = { hostname : null, port : null };
// options.hostname = host;
// options.port = global.port;
var message = "";  // from server chunks

// res
var req =http.request(options, function (res) {
  // our our response data is encoded in utf8
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    message += chunk;
    //console.log('BODY: ' + chunk);
  });

  // data completes, console.log it
  res.on('end', function () {

    var json_message = JSON.parse(message);

    console.log(json_message);
    // console.log(message.test);
    // console.log(message.error);

  });

});

// req
req.on('error', function (e) {
  console.log('problem with request: ' + e.message);
});

req.end();

