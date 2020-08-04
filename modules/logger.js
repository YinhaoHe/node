// In node, each module is encapsulated. Any var of function defined inside a module cannot be seen from gloabal.
// You have to export a module before using it.

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    // Send an http request
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://yinhaohe.tech" });
  }
}

module.exports = Logger;
// You can export a Obj or a single function: module.exports = log
// module.export.endPoint = url;
// url should not be exposed to main module
