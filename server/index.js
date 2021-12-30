var express = require('express');
var config = require('../config/config');
var router = require('../routes/index');
var bodyParser = require('body-parser')


var app = express();
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(bodyParser);
app.use(router);



// app.get('/', (req,res) => {
//     return res.send('<h1> Hello world</h1>');
// })

app.listen(config.port, () => {
    console.log(`The server is running on port ${config.port}`);
})