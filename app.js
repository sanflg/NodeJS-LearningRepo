//**** Imports ****
const express = require('express'); //https://expressjs.com https://github.com/expressjs/express
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require(path.join(__dirname, 'utils', 'path'));
const adminData = require(path.join(rootDir, 'routes', 'admin'));
const shopRoutes = require(path.join(rootDir, 'routes', 'shop'));

//**** Setting express ****
const app = express();

//**** Setting html templating engine ****
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false})); //body parser
app.use(express.static(path.join(rootDir, 'public'))); //static midleware to public folder

//**** Middlewares ****
app.use('/admin', adminData.router);
app.use('/shop', shopRoutes);

//404
app.use((req, res, next) => {
    res.render('404', {docTitle: 'Page not found'});
});

//**** Port ****
app.listen(3000); 