const Logger = require("./logger");
const logger = new Logger();

logger.log("message");
//log("export a single function");
/*************************** */

const path = require("path");

var pathObj = path.parse(__filename);
console.log(pathObj);
/*************************** */

const os = require("os");

var totalM = os.totalmem();
var freeM = os.freemem();

// ES6
// Template string
console.log(`Total Memory: ${totalM}`);
console.log(`Free Memory: ${freeM}`);
/*************************** */

const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
/*************************** */

// Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");
/*************************** */

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// http is a EventEmitter too
// server.on("connection", (socket) => {
//   console.log("New connection...");
// });

server.listen(3000);

console.log("Listening on port 3000...");
