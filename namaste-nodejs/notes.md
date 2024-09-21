## Introduction

- Node js is a javascript runtime build on chrome v8 Javascript Engine.
- Nodejs helps us to run the js code on server side.
- Nodejs is a server side javascript runtime environment.
- Nodejs is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- nodejs has event-driven, non-blocking I/O model and is single threaded.
- Nodejs was developed by Ryan Dahl in 2009.
- Nodejs is combination of V8 and libuv + some c++ code.
- even v8 is written in c++ and libuv is written in c.
- Nodejs is c++ application with v8 embedded in it.
- v8 is js engine that follows ECMA script specification.
  -ECMA script is a standardized language for the web.
  - it is a standardized language for the web.

## Global Object

- as in the browser we have "window" object which is global object.
- in nodejs we have "global" object which is global object.

in Browser
global Object - window, globalThis,this,self,frames are reference to the global object
in Nodejs
global Object - global,globalThis are reference to the global object
here "globalThis" is standardized global object in ECMAScript 2020 which is supported by all the browsers and run times.

<!-- Module System  -->

## CommonJs modules (cjs)

- it uses module.exports and require()
- it is synchronous or load the module in sync manner.
- it is blocking and Older way and it is default module in nodejs
- it runs the code in non-strict node default.

eg.
function getUser(id){
//implementation
}
//named exports
module.exports={getUser}

//imports
const {getUser}=require("./getUser");

## ES Modules system (also known as ESM or MJS or ES6 Module system)

- it uses imports and exports syntax
- it loads the module in async manner
- it is non-blocking and newer way and it is supported by nodejs since version 14.
- it runs the code in strict mode by default.
  -it is newer way

eg.
import {getUser} from "./getUser.js";
export function getUser(id){}

## Nodejs Modules

- nodejs has its own module system which is based on CommonJs.
- All the code of the module is wrapped inside a function (IIFE)
- it is synchronous and blocking.

- All code of the module runs inside an IIFE

  - it is wrapped inside a function and it is executed immediately.
    eg.

    ```js
    (function () {
    	//here module code comes inside it when the code actual go for the execution (V8).
    })();
    ```

- How are variable and functions are private in different module?
- ans: because each module in Node.js is wrapped in its own function scope, making variables and functions private to that module (IIFE and require) .

- How do we get the access to module.exports in nodejs ?
- ans : nodejs passes the module as a parameter to the IIFE

````js
    (function (module,require){

    })()
````
- require("/path") - lib/internal/module/cjs (implementation available on nodejs github)
    - resolving the module 
       - .json,package module,or localPath 
    - loading the file content or loading module
    - wraps inside the  IIFE. (compile step)
    - evaluation
    - caching (require will cache automatically)

