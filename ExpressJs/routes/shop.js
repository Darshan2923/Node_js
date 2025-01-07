
const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

// router.get('/', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from the Express!</h1>');
// });

router.get('/', (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;