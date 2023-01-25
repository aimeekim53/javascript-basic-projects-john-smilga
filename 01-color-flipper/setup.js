var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var index = fs.readFileSync(__dirname + '/setup/index.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'html'});
    res.end(index);
  }).listen(3000);