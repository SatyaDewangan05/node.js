var http = require('http')
var fs = require('fs')

// Read File
var server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data){
        res.write(data)
        res.end()
    })
})

// Create File

fs.appendFile('index2.txt', 'this is txt file', function(err){
    if(err) throw err;
    console.log('saved!');
});

//Rename

fs.rename('index2.txt', 'rindex2.txt', function(err){
    if(err) throw err;
    console.log('renamed!')
})

//Delete

fs.unlink('index2.txt', function(err){
    if(err) throw err;
    console.log('deleted!')
})

server.listen(6600)
