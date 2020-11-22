const express = require('express')
, app = express()
, cors = require('cors')
, fs = require('fs');

app.use(cors());

app.use(express.static('src'));

/*
app.use((err, req, res, next) => {
    console.log('Server error. Cause:');
    console.log(err.stack);
    res.status(500).json({ message: 'internal server error' });
});

app.use('*', (req, res) => {
    const message = `${req.originalUrl} not found`;
    console.log(message);
    res.statusMessage = message;
    res.status(404).end();
});
*/

app.get('/rotes/*',function(req, res){
    const page = req.originalUrl.substr(7);
    const path = `${__dirname}/src/app/components/${page}/${page}.component.html`;
    const pathJS = `/app/components/${page}/${page}.component.js`;

    fs.access(path, fs.F_OK, (err) => {
        if (err) {
            const message = `${req.originalUrl} not found`;
            res.statusMessage = message;
            res.status(404).end();
        }
        else {
            fs.readFile(path, function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.write('<script id="script-page-load" type="text/javascript">');
                res.write('    $.ajax("' + pathJS + '");');
                res.write('</script>');
                return res.end();
            });
        }
    });
});

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/src/" + "index.html" );
});

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/src/" + "index.html" );
});

app.get('/new-pass',function(req, res){
    res.sendFile( __dirname + "/src/" + "index.html" );
});

var server = app.listen(9094, 'localhost', function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});