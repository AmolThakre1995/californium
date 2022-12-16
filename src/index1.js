const express = require('express');
var bodyParser = require('body-parser');

const route = require('./logger/route1.js');
const greet = require('./welcome.js')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
