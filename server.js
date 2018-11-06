// server.js
let myQuote = require('./quotes.js');

const http = require("http");
http.createServer((request, response) => {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(myQuote.movieQuotes());
response.end();
}).listen(3000);



//Megans-MacBook-Pro:NodeInfoSend meganeagan$ node server
