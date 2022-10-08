const http = require("http");
const port = 8080;
const fs = require("fs");
const axios = require('axios');
const url = "https://LankyHumongousCalculators.huzaifasiddiqu1.repl.co";
//const url = "https://LankyHumongousCalculators.huzaifasiddiqu1.repl.ceeo";


const fetchInterval = 6000;

const server = http.createServer(function (req, res) {
})




console.log("Service started")
console.log(`${url} will be fetched every ${fetchInterval}ms`)

setInterval(() => {
    console.log(`Fetched ${url}!`)
    axios.get(url)
        .then((response) => {
            switch (response.status) {
                case 200:
                    console.log("Status code: 200")
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

server.listen(port, function(e) {
    if (e) {
        console.log("There was an Error.");
    } else {
        console.log("Listening to port: " + port);
    }
}) 
