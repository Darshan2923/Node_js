const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars'); // Updated import

const app = express();

// Set up Handlebars engine
app.engine(
    'handlebars',
    engine({
        extname: 'handlebars',
        layoutsDir: 'views/layouts',
        defaultLayout: 'main'
    })
);
app.set('view engine', 'handlebars');
// app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
