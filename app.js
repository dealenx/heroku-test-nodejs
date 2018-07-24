var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');
var html = require('escape-html');

var server = http.createServer();
var io = socketio(server);
var port = 3000;

fs.readFile('./index.html', function(err, html_string) {
  
  if (err) throw err;

  server.on('request', function(request, response) {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html_string);
    response.end();
  });

  server.listen(port,function() {
    console.log('\n Server running at http://localhost:' + port);
  });

});
