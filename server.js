var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    var cors = require('cors');
    
    app.use(cors());
    
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
        next();
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routeUser = require('./router/routes-user');
var routeReservation = require('./router/routes-reservation');

routeUser(app);
routeReservation(app);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);