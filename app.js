//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    // console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "327d4bd62879fe163d27f84fc337c972";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ unit;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            console.log(temp);
            console.log(weatherDescription);

            res.send("<h1>The temperature of "+ query +" is " + temp + " degree Celcius and the weather is " + weatherDescription + ".</h1>" + "<img src = " + imageURL + ">"); 
        });
    });
});

// app.get("/", function(req, res){
//     const query = "Gorakhpur";
//     const apiKey = "327d4bd62879fe163d27f84fc337c972";
//     const unit = "metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ unit;
//     https.get(url, function(response){
//         console.log(response.statusCode);

//         response.on("data", function(data){
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;
//             const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
//             console.log(temp);
//             console.log(weatherDescription);

//             res.send("<h1>The temperature of Gorakhpur is " + temp + " degree Celcius and the weather is " + weatherDescription + ".</h1>" + "<img src = " + imageURL + ">"); 
//         });
//     });
// });

app.get("/hobbies", function(req, res){
    res.send("up and running.");
});

app.listen(3000, function(req, res){
    console.log("Server is running on port 3000");
});