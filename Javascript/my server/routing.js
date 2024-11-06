const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === "/about") {
    res.end("About Us");
  } else if (req.url === "/home") {
    res.end("Welcome Home");
  } else {
    res.end('<a href = "/about">About</a><br><a href = "/home">Home</a>');
  }
});

server.listen(8030, () => {
  console.log(`Server is running at: http://localhost:8030`);
});
