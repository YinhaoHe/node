// A Class here is a container for a bunch of related methods or properities
const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");
