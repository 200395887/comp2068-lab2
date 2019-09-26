'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    //res.render('index', { title: 'Express' });

    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);

    if (req.query.method == 'add' && req.query.x && req.query.y) {
        var sum = x + y;
        res.send('Adding ' + req.query.x + ' + ' + req.query.y + ' = ' + sum);
    }
    else if (req.query.method == 'subtract' && req.query.x && req.query.y) {
        var sub = x - y;
        res.send('Subtracting ' + req.query.x + ' - ' + req.query.y + ' = ' + sub);
    }
    else if (req.query.method == 'divide' && req.query.x && req.query.y) {
        var division = x / y;
        res.send('Dividing ' + req.query.x + ' / ' + req.query.y + ' = ' + division);
    }
    else if (req.query.method == 'multiply' && req.query.x && req.query.y) {
        var muli = x * y;
        res.send('Multiplying ' + req.query.x + ' * ' + req.query.y + ' = ' + multi);
    }
    else
        res.send('Basic Calculations: To do the calculations type "lab2?method=(methodName)&x=#&y=#"');
       });

module.exports = router;
