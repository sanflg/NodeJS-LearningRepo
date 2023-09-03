const fs = require('fs'); //fileSystem i/o

const requestHandler = (req, res) => {
    //save url and method
    const url = req.url;
    const method = req.method;
    //display an input button that will redirect to /message page doing a POST and store the input in a text file once it is submited
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My first page!</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');

        return res.end();
    }

    if (url === '/message' && method === "POST") {
        const body = [];
        //on data buffer present in a POST call, store the data in each buffer transaction
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        //On end of data transaction
        return req.on('end', ()=> {
            //concatenate all the data packages and convert them to string
            const parsedBody = Buffer.concat(body).toString();
            //split the key value 'message=body' and get only the body
            const message = parsedBody.split('=')[1];
            //write message async to a file, sending 302 statuscode and redirecting to no url page (home/base)
            fs.writeFile('message.txt', message, (err) => {
                console.log(message);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    //In case none of the conditionals is meet, this page will be displayed.
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page!</title></head>');
    res.write('<body><h1>Me gusta el pepino</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = {
    handler: requestHandler
    //text: 'some text t o export';
}; //multiple objects export can be done by defining a 

//module.exports.handler = requestHandler; ----> does the same than above