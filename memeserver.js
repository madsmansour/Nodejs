var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('C:/Users/Mads/Desktop/Web development/Node/memes/dogpoop.png', (err, data) => {
        studerende = {};
        console.log(data);
        studerende.file = data;
        res.end(JSON.stringify(studerende));
    })
   
}).listen(8082);
