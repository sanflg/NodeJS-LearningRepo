//**** Import ****
const express = require('express'); //https://expressjs.com https://github.com/expressjs/express
const bodyParser = require('body-parser');
const path = require('path');

const rootDir = require(path.join(__dirname, 'utils', 'path'));

//**** Setting express ****
const app = express();

app.use(bodyParser.urlencoded({extended: false})); //body parser
app.use(express.static(path.join(rootDir, 'public'))); //static midleware to public folder

const adminData = require(path.join(rootDir, 'routes', 'admin'));
const shopRoutes = require(path.join(rootDir, 'routes', 'shop'));

//**** Middlewares ****
app.use('/admin', adminData.router);
app.use('/shop', shopRoutes);

//404
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

//**** Port ****
app.listen(3000);