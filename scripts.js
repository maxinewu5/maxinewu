var date = new Date();
document.getElementById("curtime").innerHTML = date.getTime();

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/greed', function (req, res) {
    console.log("hello");
    console.log(req);
})