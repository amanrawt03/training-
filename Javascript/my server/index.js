const http = require("http");
const url = require('url')
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); //so server displays response as html
    // res.writeHead(200, { "Content-Type": "text/plain" }); 
    // REQ. METHODS:
    console.log(req.url);
    console.log(req.method);
    console.log(JSON.stringify(req.headers));
    res.end('<h1>In header I\'m using html</h1> <button>Submit</button>')

    // Handling Query Params
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.end(txt);

  })

  server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});

