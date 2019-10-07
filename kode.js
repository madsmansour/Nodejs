var http = require('http');
var date = require('./dato');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var studerende = {};
    studerende.navn = "Cosby";
    studerende.humør = false;
    res.end(JSON.stringify(studerende) + "</br>" + date.myDateTime());
}).listen(999);

