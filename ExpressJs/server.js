const express = require('express');

const http = require('http');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware!");
    next(); //Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log("In the another middleware!");
    res.send('<h1>Hello from expressjs</h1>')
});

const server = http.createServer(app);

server.listen(3000);