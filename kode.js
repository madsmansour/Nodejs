var http = require('http');
var date = require('./dato');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var studerende = {};
    studerende.navn = "Cosby";
    studerende.humør = false;
    studerende.billede = "dogpoop.png";
    studerende.tid = date.myDateTime();
    res.end(JSON.stringify(studerende));
}).listen(8081);




/*
fs.appendFile('demofile1.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
*/