/*
- project init
- first all top level things are executed
- require modules
- event callbacks register
- now event loop process will start
   - as soon as event start - it will offload the cpu intensive tasks to thread pool
	 by Default Node.js uses 4 threads in the thread pool but can be configured up to 128 threads depending node version.
   - cpu intensive tasks are offloaded to thread pool eg . fs read/write, network requests ,crypto,compression etc.

now event loop will process 
 #start event loop - run the expired timers callbacks eg. setTimeout, setInterval
  - process I/O or IO polling callbacks - these are processed before all the above tasks
  - setImmediate callbacks - these are processed after all the above tasks 
	 - setImmediate(callback) is a Node.js API that is similar to setTimeout(callback, 0).
	   but it executes the callback immediately before the next event loop iteration.
- close callbacks - eg. connection close event, server close event etc.

//imp - promise resolve callbacks are run every time  whenever event loop phase transitions
//like - time expired -> IO callback -> setImmediate callback -> close callbacks 
// here -> is transtion of event loop phase so in between promise resolve callbacks are executed
- if any pending tasks 
 no - exit 
 yes - go back to step - $start event loop



	┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
pending callbacks: executes I/O callbacks deferred to the next loop iteration.
idle, prepare: only used internally.
poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
check: setImmediate() callbacks are invoked here.
close callbacks: some close callbacks, e.g. socket.on('close', ...).
   Between each run of the event loop, Node.js checks if it is waiting for any asynchronous I/O or timers and shuts down cleanly if there are not any.
*/

/*
 From Docs : - https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick 


What is the Event Loop?


The Event Loop is a crucial part of Node.js that allows it to perform non-blocking I/O operations, despite JavaScript being single-threaded. It does this by offloading operations to the system kernel whenever possible.

2.
Event Loop Phases


The event loop consists of several phases:

1.
Timers: Executes callbacks scheduled by setTimeout() and setInterval().
2.
Pending callbacks: Executes I/O callbacks deferred to the next loop iteration.
3.
Idle, prepare: Used internally by Node.js.
4.
Poll: Retrieves new I/O events and executes I/O related callbacks.
5.
Check: Executes setImmediate() callbacks.
6.
Close callbacks: Executes close event callbacks.
3.
How the Event Loop Works


Node.js starts and initializes the event loop.
It processes the provided input script.
The event loop starts processing phases in order.
Each phase has a FIFO queue of callbacks to execute.
When one phase is complete, it moves to the next.
This process continues until there are no more callbacks to process.


4.
Important Concepts
setImmediate() vs setTimeout(): 
setImmediate() is executed in the Check phase.
setTimeout() is executed in the Timers phase.
Within an I/O cycle, setImmediate() will always execute before setTimeout().
process.nextTick():
Not technically part of the event loop.
Callbacks are processed after the current operation completes, regardless of the current phase.
Can potentially block the event loop if used recursively.

5.
Best Practices

Use setImmediate() instead of process.nextTick() in most cases,
 as it's easier to reason about.
Be cautious with process.nextTick() to avoid starving
the I/O by preventing the event loop from proceeding to the poll phase.

*/

/*
const fs=require('fs');

//as setImmediate callback will be processed before next event loop iteration
setImmediate(() => {
	console.log('setImmediate-1 - callback executed');
})

setTimeout(() => {
	console.log('setInterval-2 - callback executed');
}, 0)
setTimeout(() => {
	console.log('setTimeout-1 - callback executed');
}, 0)

console.log('start event loop');
*/

//with file reading 
const fs=require('fs');
const crypto=require('crypto');

const startTime=Date.now();

// UV_THREADPOOL_SIZE environment variable can be set to control the number of threads in the thread pool
process.env.UV_THREADPOOL_SIZE=6;


/*

setTimeout(() => {
	console.log('setTimeout-1 - callback executed with file reading');
}, 0)

setImmediate(() => {
	console.log('setImmediate-1 - callback executed with file reading');
});

console.log("code from top level- with file reading");

//here  readFile operation might take bit time 
fs.readFile('data.txt', 'utf8', (err, data) => {
	console.log('file reading completed or IO Polling finished - ', data);
	if (err) {
		console.error(err);
		return;
	}
	console.log('file reading completed - ', data);
	setTimeout(() => {
		console.log('setTimeout-2 - callback executed after file reading');
	}, 0);

	setTimeout(() => {
		console.log('setTimeout-2 - callback executed after file reading with 1s delay');
	}, 1);
	setImmediate(() => {
		console.log('setImmediate-2 - callback executed after file reading');
	});
	console.log('code from inside readFile callback');

	//let do some heavy computation 
	const iteration=100000;
	const keyLen=1024;
	crypto.pbkdf2("My secure Password -1", "my salt", iteration, keyLen, "sha512", (err, key) => {
		console.log(`time taken-1 for file reading and computation: ${Date.now()-startTime}ms hash lenght is ${key.length}`);
	});

	crypto.pbkdf2("My secure Password-2", "my salt", iteration, keyLen, "sha512", (err, key) => {
		console.log(`time taken -2  for file reading and computation: ${Date.now()-startTime}ms hash lenght is ${key.length}`);
	});

	crypto.pbkdf2("My secure Password-3", "my salt", iteration, keyLen, "sha512", (err, key) => {
		console.log(`time taken -3  for file reading and computation: ${Date.now()-startTime}ms hash lenght is ${key.length}`);
	});
	crypto.pbkdf2("My secure Password-4", "my salt", iteration, keyLen, "sha512", (err, key) => {
		console.log(`time taken -4  for file reading and computation: ${Date.now()-startTime}ms hash lenght is ${key.length}`);
	});

	crypto.pbkdf2("My secure Password-5", "my salt", iteration, keyLen, "sha512", (err, key) => {
		console.log(`time taken -5  for file reading and computation: ${Date.now()-startTime}ms hash lenght is ${key.length}`);
	});

	crypto.pbkdf2("My secure Password-6", "my salt", iteration, keyLen, "sha512", (err, key) => {
		console.log(`time taken -6  for file reading and computation: ${Date.now()-startTime}ms hash lenght is ${key.length}`);
	});
});

*/

console.log("-------------------------------------Second example from doc-------------------------------------------")
function someAsyncOperation(callback) {
	// Assume this takes 95ms to complete
	fs.readFile('data.txt', "utf-8", callback);
}

const timeoutScheduled=Date.now();

setTimeout(() => {
	const delay=Date.now()-timeoutScheduled;

	console.log(`${delay}ms have passed since I was scheduled`);
}, 1000);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation((_, data) => {
	console.log('file reading completed - ', data);
	const startCallback=Date.now();

	// do something that will take 10ms...
	while (Date.now()-startCallback<10) {
		// console.log('doing something...');
	}
});
