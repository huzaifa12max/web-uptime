const http = require("http");
const express = require("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");
const axios = require('axios');
const url = "https://LankyHumongousCalculators.huzaifasiddiqu1.repl.co";
const fetchInterval = 12000;

app.use(express.static("./public/static"))
app.set('view engine', 'ejs')

app.get("/", (req,res) => {
    res.render("index.ejs")
})

console.log("Service started")
console.log(`${url} will be fetched every ${fetchInterval}ms`)

let eer;

setInterval(() => {
    console.log(`Fetched ${url}!`)
    axios.get(url)
        .then((response) => {
            switch (response.status) {
                case 200:
                    eer = 200;
                    console.log("Status code: " + eer.toString())
                    break;
                case 301:
                    console.log("Status code: 301")
                    break;
                case 302:
                    console.log("Status code: 302")
                    break;
                case 404:
                    console.log("Status code: 404")
                    break;
                case 403:
                    console.log("Status code:  403")
                    break;
                case 410:
                    console.log("Status code: 410")
                    break;
                case 500:
                    console.log("Status code: 500")
                    break;
                case 503:
                    console.log("Status code: 503")
            }
        })
        .catch(function (err) {
            console.log(err.response.status);
        })
}, fetchInterval)

app.listen(process.env.PORT, function(e) {
    if (e) {
        console.log("There was an Error.");
    } else {
        console.log("Listening to port: " + (process.env.PORT));
    }
}) 
