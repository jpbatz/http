// guesses integer password to Jon's server.  when found, 
// send url of a YouTube video to play on his computer.

// import nodejs http module
var http = require('http');

//console.log(process.argv[2]);
//console.log(process.argv[3]);

// if not defines, default assignment
var host = process.argv[2] || '167.216.15.200';
var port = process.argv[3] || 1337;

console.log(host, port);

// run app with arguments


// create http request
var options = { hostname : host, port : port, method : 'POST' };

var message = "";  // from server chunks
var json_message;

var url = "https://www.youtube.com/watch?v=gVhRoKtyfDw";
var pwd = 0;
// var found = false;
// var i = 0;

for(var i=0; i<=12000; i++) {
// doesn't work with async
// while(!found) {
  // res
  var req = http.request(options, function (res) {
    message = "";
    // our our response data is encoded in utf8
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      message += chunk;
      //console.log('BODY: ' + chunk);
    });

    // data completes, console.log it
    res.on('end', function () {

      json_message = JSON.parse(message);

      console.log(json_message);
      // console.log(json_message.success);
      // console.log(json_message.current_video);
      console.log(message.error);

      if(message.success) {
        //console.log(json_message.success);
        // cannot do this, because asynchronous
        //pwd = i;
        return;
      }

    });


  });

  // req
  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
  });

  //pwd = Math.floor(Math.random() * 100);
  //console.log(i);
  pwd = i;
  // no spaces, or it won't see vars!!
  req.write('video='+url+'&password='+pwd+'&name='+'jpbatz');

  req.end();

  }