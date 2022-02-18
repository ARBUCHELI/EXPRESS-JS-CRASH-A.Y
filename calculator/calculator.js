//jshint version:6

//We use body parser to process post request
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//We use bodyParser.urlencoded when we need to parse data that comes from a html form.
//Whenever you need to grab information that gets posted to your server from a HTML form, you’re gonna be using urlencoded.
//Inside body.parser.urlencoded(extended: True) you need to pass extended: True that allows us to pass nested objects.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    /*When we use send, we are sending individual bits of HTML data, but if we want to send and entire webpage we have to use the .sendFile method.
    res.send("Hello World");*/
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
})

app.get("/bmicalculator", function(req, res) {
    /*When we use send, we are sending individual bits of HTML data, but if we want to send and entire webpage we have to use the .sendFile method.
    res.send("Hello World");*/
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var n = weight/(height*height);

    res.send("Your BMI is " + n);
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
});