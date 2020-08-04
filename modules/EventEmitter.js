// A Class here is a container for a bunch of related methods or properities
const EventEmitter = require("events");
const emitter = new EventEmitter();

//Register a listener
emitter.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

// Listener for logging
emitter.on("messageLogging", (arg) => {
  console.log("Listener for logging", arg);
});

// Raise an event
emitter.emit("messageLogged", { id: 1, url: "http://yinhaohe.tech" });

// Raise: logging
emitter.emit("messageLogging", { message: "Logging" });

// Emit means Making a noise or produce
