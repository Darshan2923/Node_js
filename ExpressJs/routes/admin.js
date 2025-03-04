const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

// router.get('/add-product', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button> </form>');
// })

// router.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// })

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
})

router.post('/product', (req, res, next) => {
    console.log(req.body);

    res.redirect('/');
})

module.exports = router;