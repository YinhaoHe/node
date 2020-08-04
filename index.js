var _ = require("underscore");

// Require function will find the underscore by following order:
// 1. Core module?
// 2. File or folder './underscore'?
// 3. node_modules?

// Node package Semantic version: 1.1.4 => Major.Minor.Patch
// 1. Patch means for bug fix.
// 2. Minor means adding features w/o breaking existing APIs.
// 3. Major means adding features which could break existing APIs.
// Every time an bigger update will reset the small ones.
// For example:
// 1.4.0 update to 1.4.1 => 1.4.2 => ...... => 1.4.10
// 1.4.10 => 1.5.0 => 1.5.1 => ..... => 1.5.9
// 1.5.9 => 2.0.0 => 2.0.1 => 2.0.2 => 2.1.0
// ~4.13.0 means 4.13.x are all good tilda
// ^5.9.27 means 5.x.x are all good carrot

var result = _.contains([1, 2, 3], 2);
console.log(`Result is ${result}`);
