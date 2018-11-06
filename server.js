// server.js
let myQuote = require('./quotes.js');

const http = require("http");
http.createServer((request, response) => {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(myQuote.movieQuotes());
response.end();
}).listen(3000);



//Megans-MacBook-Pro:NodeInfoSend meganeagan$ node server
// Megans-MacBook-Pro:NodeInfoSend meganeagan$ npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help json` for definitive documentation on these fields
// and exactly what they do.
 
// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (nodeinfosend)
// Megans-MacBook-Pro:NodeInfoSend meganeagan$ npm install --
// npm notice created a lockfile as package-lock.json. You should commit this file.
// npm WARN nodeinfosend@1.0.0 No description

// up to date in 0.66s

//Megans-MacBook-Pro:NodeInfoSend meganeagan$ npm install --save-dev nodemon