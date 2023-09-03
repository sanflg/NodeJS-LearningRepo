const http = require('http');
const routes = require('./routes'); //node attaches the .js extension

/****Event Loop:
    *1- Timers (setTimeout/setInterval)
    *2- Pending callbacks (pending i/o)
    *3- Poll (new i/o)
    *4- Check (execute setImmediate)
    *5- close callbacks
    *6- process.exit
*****/

/****Useful Commands:
    *npm install -g [name] --> will install globally on local
    *npm install [name] --save-dev -->will install as dev dependency and will not run in dev
    *npm install [name] --save -->will install as prod dependency
    *npm start ---> runs the start command in package.json file to start the project
*****/

//create a server with request and response
const server = http.createServer(routes.handler);

//port to listen to
server.listen(3000);