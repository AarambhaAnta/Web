const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { 
    console.log("Got a new request");
    res.write("Hi, New Server Response");
    res.write("Check connection");
    res.end();
});

server.listen(3030, 'localhost', () => {
    console.log("Server is listening on port 3030");
});