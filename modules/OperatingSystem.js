const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//ES6
console.log(`Total memory: ${totalMemory}`);
