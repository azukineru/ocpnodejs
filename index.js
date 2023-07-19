const http = require("http");

const server = http.createServer((req,res) -> {
    res.writeHead(200, {
        "Content-type": "text/html",
    });
    res.end("<h1>Hello world from openshift node.js</h1>");
});

server.listen(8000,() => {
    console.log("Listening on port 8000");
});