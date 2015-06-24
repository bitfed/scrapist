/*jslint node: true, nomen: true */
'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));

http.listen(3001, function () {
    console.log('Server is running on port 3001.');
});
