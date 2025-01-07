const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// const http = require('http');

const app = express();

// app.use((req, res, next) => {
//     console.log("In the middleware!");
//     next(); //Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//     console.log("In the another middleware!");
//     res.send('<h1>Hello from expressjs</h1>')
// });

// const server = http.createServer(app);

// server.listen(3000);

app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', (req, res, next) => {
//     console.log('This always runs!');
//     next();
// })

app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// app.use('/', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from the Express!</h1>');
// });

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
})


app.listen(3000);