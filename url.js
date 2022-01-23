var http = require('http')
var url = require('url')
var fs = require('fs')


console.log('Server has Started')

var server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, function(err, data){
        if(err){
            res.end('404 Error!!!');
        }
        res.write(data);
        res.end();
    })
})

server.listen(8080);