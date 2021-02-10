# Node

## What is Node

- Used to run JavaScript code in v8 engine

> ## Everything about Node
>
> - Node is a runtime environment for executing JS code.
>
> - Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest JS engine in the world. 
> - We use Node to build fast and scalable networking applications. It’s a perfect choice for building RESTful services.
> - Node applications are single-threaded. That means a single thread is used to serve all clients.
> - Node applications are asynchronous or non-blocking by default. That means when the application involves I/O operations (eg accessing the file system or the network), the thread doesn’t wait (or block) for the result of the operation. It is released to serve other clients.
> - This architecture makes Node ideal for building I/O-intensive applications.
> - You should avoid using Node for CPU-intensive applications, such as a video encoding service. Because while executing these operations, other clients have to wait for the single thread to finish its job and be ready to serve them.
> - In Node, we don’t have browser environment objects such as window or the document object. Instead, we have other objects that are not available in browsers, such as objects for working with the file system, network, operating system, etc. 

[Back to top](#Node)

---

# Module

## Global Object

- `global` obj in `node.js` is similar to `window` obj in browsers.
- In browsers, `var message = '';` `window.message` can be access.
- In Node, `var message = '';` `global.message` **CANNOT** be access - **undefined**

```js
console.log(); === global.console.log();

setTimeout(); === global.setTimeout();
clearTimeout();

var message = '';
"global.message" is WRONG

setInterval();
clearInterval();
```

- There is no `window` object in `node.js`. `window` obj is in **browser** only.
- `window.console.log` equals to `console.log` in **browers**.

[Back to top](#Node)

---

## Modules

- Every file is a `module`. 
- Every project have a main module.  
- Do not add function to `global`, instead design it in a Module.

- Called `private` in OOP

```javascript
console.log(module);

//log will show a json file.
```

[Back to top](#Node)

---

## Create a Module

- `module.exports.log = log;` - export an obj
- `module.exports = log;` - export a function
- Only export what's needed; hide all details; encapsulation

[Back to top](#Node)

---

## Load a Module

- `require()` - only in Node not in Browsers
- `const logger = require("./logger");`

[Back to top](#Node)

---

## Module Wrapper Function

```javascript
(function (exports, require, module, __filename, __dirname){
  
})
```

- Node does not execute code directly, it wraps code in a function.

[Back to top](#Node)

---

## Path Module

```javascript
const path = require("path");

var pathObj = path.parse(__filename);
console.log(pathObj);
```

[Back to top](#Node)

---

## OS Module

```javascript
const os = require("os");

var totalM = os.totalmem();
var freeM = os.freemem();

// ES6
// Template string
console.log(`Total Memory: ${totalM}`);
console.log(`Free Memory: ${freeM}`);
```

[Back to top](#Node)

---

## File System Module

```javascript
const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (err) console.log("Error", err);
  else console.log("Result", files);
});
```

[Back to top](#Node)

---

## Event Module

- Listener - to listen and handle an event
- Emit - to raise an event

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", () => {
  console.log("Listener called");
});

// Raise an event
emitter.emit("messageLogged");
```

- `emitter.emit` - emitter can add arguments
- `emitter.on` - listener can listen and take the args

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

// Raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" });
```

- Extend `EventEmitter`

`logger.js`

```javascript
const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;

```

`app.js`

```javascript
const Logger = require("./logger.js");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");
```

[Back to top](#Node)

---

## HTTP module

- We **DO NOT** use this to build http server
- We USE **Express** which is built on HTTP module
- `express` can better handle the routes instead of writing routes linearly

```javascript
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
```

[Back to top](#Node)

---

>## Node Core
>
>- We don’t have the window object in Node.
>- The global object in Node is “global”.
>- Unlike browser applications, variables we define are not added to the “global” object. 
>- Every file in a Node application is a module. Node automatically wraps the code in each file with an IIFE (Immediately-invoked Function Expression) to create scope. So, variables and functions defined in one file are only scoped to that file and not visible to other files unless explicitly exported. 
>- To export a variable or function from a module, you need to add them to module.exports: `module.exports.sayHello = sayHello;`
>- To load a module, use the require function. This function returns the module.exports object exported from the target module: `const logger = require(‘./logger’);`
>- Node has a few built-in modules that enable us to work with the file system, path objects, network, operating system, etc. 
>- EventEmitter is one of the core classes in Node that allows us to raise (emit) and handle events. Several built-in classes in Node derive from EventEmitter. 
>- To create a class with the ability to raise events, we should extend EventEmitter: `class Logger extends EventEmitter { } `

[Back to top](#Node)

---

# NPM



















