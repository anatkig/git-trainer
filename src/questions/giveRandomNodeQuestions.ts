import randomQuestionLogic from '../utils/randomQuesionLogic';

const giveRandomNodeQuestion = (dataBlockNumber: number) => {
  const data = `

  #### Q1. When a javaScript function is invoked (called) in Node, where is a new frame placed?
@@
  - [x] the call stack
  - [ ] the event loop
  - [ ] the poll phase
  - [ ] the events queue
@@
  **Explanation:** If a function calls another function, the JavaScript engine creates a new function execution context for the function that is being called and pushes it on top of the call stack.
@@
  #### Q2. Which of the following is a core module in Node?
@@
  - [ ] webpack
  - [x] crypto
  - [ ] request
  - [ ] chalk
@@
  #### Q3. Which of the following Buffer class methods returns an uninitialized buffer?
@@
  - [x] allocUnsafe
  - [ ] concat
  - [ ] from
  - [ ] alloc
@@
  **e.g.:** const buf3 = Buffer.allocUnsafe(10);
@@
  #### Q4. Which of the following modules is NOT a built-in module in Node?
@@
  - [x] ftp
  - [ ] events
  - [ ] dgram
  - [ ] http2
@@
  #### Q5. Which fs module method can be used to read the content of a file without buffering it in memory?
@@
  - [ ] read
  - [ ] readFile
  - [x] createReadStream
  - [ ] readFileSync
@@
  To minimize memory costs, when possible prefer streaming via fs.createReadStream()
@@
  #### Q6. Which of the following DNS module methods uses the underlying OS facilities and does not necessarily perform any network communication?
@@
  - [x] lookup
  - [ ] resolve
  - [ ] resolve4
  - [ ] reverse
@@
  **Explanation:** dns.lookup() does not necessarily have anything to do with the DNS protocol. 
  The implementation uses an operating system facility that can associate names with addresses and vice versa. 
  **e.g.:** dns.lookup('example.com', options, (err, address, family) =>
  console.log('address: %j family: IPv%s', address, family));
// address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6
@@
  #### Q7. How do you check that a value is a date object in Node?
@@
  - [x] util.types.isDate(value)
  - [ ] assert.isDate(value)
  - [ ] console.isDate(value)
  - [ ] util.date(value)
@@
  #### Q8. Can you create an https web server with Node.js?
@@
  - [ ] no, there are no modules supporting it yet
  - [x] yes, with the https or http2 modules
  - [ ] yes, through the path module
  - [ ] yes, with the http module
@@
  **e.g.:** const https = require('https');
@@
  #### Q9. What is the Api that is designed to insulate Addons from changes in the underlying JavaScript engine?
@@
  - [ ] A-API
  - [ ] Z-API
  - [x] N-API
  - [ ] X-API
@@
  **Explanation:** Node-API (formerly N-API) is an API for building native Addons.
   It is independent from the underlying JavaScript runtime (for example, V8) and is maintained as part of Node.js itself.
@@
  #### Q10. Which CLI option can you use to debug a node script in Chrome DevTools?
@@
  - [ ] --dev-tools
  - [x] --inspect
  - [ ] --chrome
  - [ ] --debug
@@
  **Explanation:** From official docs: [reference](https://nodejs.org/en/docs/guides/debugging-getting-started/)
@@
  #### Q11. How can you count the number of logical CPUs on the machine that is running Node?
@@
  - [ ] node -p "process.cpus"
  - [ ] node -p "util.cpus().size"
  - [ ] node -p "process.os.cpus"
  - [x] node -p "os.cpus().length"
@@
  **Explanation:** From coderrocketfuel docs: [reference](https://coderrocketfuel.com/article/get-the-number-of-system-cpu-cores-using-node-js)
@@
  #### Q12. Which of the following is a method on the console object?
@@
  - [ ] exit
  - [ ] test
  - [x] time
  - [ ] print
@@
The console.time() method starts a timer you can use to track how long an operation takes.
@@
  #### Q13. Which object is used to manage the cache of required modules?
@@
  - [ ] global.cache
  - [ ] module.cache
  - [ ] process.cache
  - [x] require.cache
@@
  **Explanation:** From official docs: [reference](https://nodejs.org/api/modules.html#modules_require_cache)
@@
  #### Q14. What is the command to silence all process warnings?
@@
  - [ ] node index.js --trace-warnings
  - [x] node --no-warnings
  - [ ] node -trace-warnings
  - [ ] node index.js --no-warnings
@@
  **Explanation:** From official docs: [reference](https://nodejs.org/api/cli.html#cli_no_warnings)
@@
  #### Q15. How can you use the promise API with a callback-based function such as child_process.exec?
@@
  - [ ] new Promise(child_process.exec())
  - [ ] util.promisify(child_process.exec())
  - [x] util.promisify(child_process.exec)
  - [ ] new Promise(child_process.exec)
@@
  **Explanation:** From official docs: [reference](https://nodejs.org/api/child_process.html)
@@
  #### Q16. Which of the following is NOT a Node repl command?
@@
  - [ ] .break
  - [x] .history
  - [ ] .editor
  - [ ] .save
@@
  **Explanation:** From official docs: [reference](https://nodejs.org/api/repl.html#repl_commands_and_special_keys)
@@
  #### Q17. Which statement is true when you run the code shown below?
@@
  'require('child_process').fork('script.js');'
@@
  - [ ] The forked process shares the event loop with the parent process
  - [ ] A new VM instance is created and the two VM instances will be shared between the forked process and the parent process.
  - [x] The forked process will have its own VM instance.
  - [ ] The forked process shares the same VM thread with the parent process.
@@
  **Explanation:** From official docs: [reference](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)
@@
  #### Q18. If EventEmitter is in scope, which of the following lines of code will have an event emitter emitting a change event?
@@
  - [x] EventEmitter.emit('change');
  - [ ] EventEmitter.new().emit('change');
  - [ ] (new EventEmitter()).emit('change');
  - [ ] new EventEmitter('change');
@@
  **Explanation:** _Because the EventEmitter is already in scope. No need to create new one._
@@
  #### Q19. Which of the following objects is a stream
@@
  - [ ] process.uptime
  - [x] process.stdout
  - [ ] process
  - [ ] Buffer
@@
  **Explanation:** _process.stdout is Buffer type._
@@
  #### Q20. Which module variable holds the resolved absolute path of the current module file?
@@
  - [ ] '__pathname'
  - [ ] '__location'
  - [ ] '__flder'
  - [x] '__filename'
@@
  #### Q21. If the child_process module methods are in scope, what is a current way to execute the command ps -ef using a child process?
@@
  - [ ] spawn("ps -ef")
  - [x] exec("ps -ef")
  - [ ] exec("ps", "-ef")
  - [ ] fork("ps -ef")
@@
The “-ef” option of the “ps” command is used to print all the processes running on the system in the standard format.
@@
  #### Q22. Which console method can be used to print the stack trace to the point of its execution?
@@
  - [ ] stack
  - [x] trace
  - [ ] debug
  - [ ] print
@@
  #### Q23. When you run JavaScript in a Node.js application, which of the following elements in a Node.js stack actually executes that JavaScript?
@@
  - [ ] the libuv library
  - [ ] the c-ares library
  - [x] the VM (like VS or Chakra)
  - [ ] the repl module
@@
  #### Q24. Looking at the code below, what does the console show?
@@
  '''
  const http = require('http');
   const hostname = '127.0.0.1'; const port = 3000;
   const server = http.createServer((req, res) => {
    res.statusCode = 200;  res.setHeader("Content-Type", "text/plain");  res.end("Hello World\n");
  });
  server.listen(port, hostname, () => { console.log('server running at http://\${hostname}:\${port}/'); });
  '''
@@
  - [ ] server running at http://localhost:3000/
  - [ ] server running at port 3000
  - [ ] server running at http://localhost:4000/
  - [x] server running at http://127.0.0.1:3000/
@@
  #### Q25. What is the purpose of the path module?
@@
  - [x] to provide utilities to play with file and directory paths
  - [ ] to provide utilities to add and remove files
  - [ ] It is a retiring module.
  - [ ] to provide utilities to test files
@@
  #### Q26. How do you make an HTTP server object active and listen to requests on certain ports?
@@
  - [ ] server. start
  - [ ] server.activate
  - [x] server.listen
  - [ ] server. run
@@
  #### Q27. What does the code shown below do?
@@
  '''
  const fs = require('fs'); const os = require('os');
  const system = os.platform(); const user = os.userInfo().username;
  fs.appendFile('hello.txt', 'Hello \${user} on \${system}', (err) => { if (err) throw err; console.log('The data was appended to file!');}
  );
  '''
@@
  - [x] creates a text file hello.txt and appends customized text
  - [ ] creates an image file
  - [ ] console logs system information
  - [ ] creates a file named data and append numbers
@@
  #### Q28. How do you start a Node application, if the entry file is indexjs?
@@
  - [ ] nodemon start
  - [ ] start index.js
  - [x] node index.js
  - [ ] node start
@@
  #### Q29. What is the purpose of the file system (fs) module?
@@
  - [ ] to provide methods to work with requests and responses
  - [x] to provide methods to work with files
  - [ ] to provide methods to work with databases
  - [ ] to find new file systems
@@
  #### Q30. What is the Node LTS version?
@@
  - [ ] It is the current unstable version and is to be avoided.
  - [ ] It is the version that will be retired soon.
  - [ ] It is the version with the latest features.
  - [x] It is the safest version for long-term support.
@@
  #### Q31. Which of the following is NOT a valid stream in Node?
@@
  - [x] process. stdinfo
  - [ ] process. stdin
  - [ ] process. stdout
  - [ ] process. stderr
@@
  #### Q32. You have a script.js file with the single line of code shown here. What will be the output of executing script.js with the node command?
@@
  'console.log(arguments);'
@@
  - [ ] ReferenceError: arguments is not defined
  - [ ] an empty string
  - [ ] undefined
  - [x] an object representing an array that has five elements
@@
  #### Q33. Which choice is not a valid method on event emitters?
@@
  - [x] start
  - [ ] on
  - [ ] once
  - [ ] off
@@
  #### Q34. Which special object is an instance of EventEmitter?
@@
  - [x] process
  - [ ] Buffer
  - [ ] root
  - [ ] require
@@
  [Reference](https://nodejs.org/docs/latest-v16.x/api/process.html)
@@
  #### Q35. What is the command to get a list of available commands for Node.js?
@@
  - [ ] node index.js -x
  - [ ] node -v
  - [x] node -h
  - [ ] node index.js -h
@@
  #### Q36. When a request event is received in the HTTP module, what is the type of the first argument passed to that event, usually named req?
@@
  - [x] http.IncomingMessage
  - [ ] http.ServerRequest
  - [ ] http.ClientRequest
  - [ ] http.ServerResponse
@@
  #### Q37. What are the arguments passed to the module wrapper function?
@@
  - [ ] 'exports, __filename, __dirname'
  - [ ] 'exports, process, require, module, __filename, __dirname'
  - [ ] 'exports, module, __filename, __dirname'
  - [x] 'exports, require, module, __filename, __dirname'
@@
**e.g.:** (function (exports, require, module, __filename, __dirname) {
  //module code
});
@@
  #### Q38. Which library provides Node.js with the event loop?
@@
  - [ ] V8
  - [ ] c-ares
  - [x] libuv
  - [ ] events
@@
  #### Q39. What does the .node file extension represent?
@@
  - [ ] a C++ file that can have a .node extension and that Node will be able to execute directly.
  - [x] a C++ Addon file that is built with node-gyp
  - [ ] a JSON file that can have a .node extension as well as the .json extension
  - [ ] a JavaScript file that can have a .node extension as well as the .js extension
@@
  #### Q40. What can you export with module.exports?
@@
  - [ ] only objects.
  - [ ] only functions
  - [ ] only variables and arrays
  - [x] functions, objects, arrays, or anything you assign to the module
@@
  #### Q41. Which core module in Node can you use to take advantage of multicore systems?
@@
  - [ ] os
  - [ ] util
  - [x] cluster
  - [ ] net
@@
  #### Q42. Which core Node module has wrappers for OpenSSL methods?
@@
  - [ ] SSL
  - [ ] hash
  - [x] crypto
  - [ ] TLS
@@
TLS - Transport Layer Security
SSL - Secure Sockets Layer 
Open SSL is an all-around cryptography library that offers open-source application of the TLS protocol. 
First released in 1998, it is available for Linux, Windows, macOS, and BSD systems.
OpenSSL allows users to perform various SSL related tasks, including CSR (Certificate Signing Request) and private keys generation and SSL certificate installation. 
@@
  #### Q43. Which line imports a promise-based version of the readFile method?
@@
  - [x] const { readFile } = require(fs).promises
  - [ ] const { readFile } = require(fs)
  - [ ] const { readFilePromises: readFile } = require(fs)
  - [ ] const { readFile } = require(promises)
@@
So, anytime you have multiple async operations to coordinate in some way, I immediately want to go to promises. 
And, the best way to use promises to coordinate a number of async operations is to make each async operation return a promise.
The lowest level async operation you show is fs.readFile().
@@
  #### Q44. According to the rules of semantic versioning, what does a release incrementing the third number in an npm version string communicate to users about the release changes?
@@
  - [ ] Changes are not backwards compatible.
  - [ ] Changes might not be backward compatible and might break existing code.
  - [x] Changes are just bug fixes and no new features were added.
  - [ ] Changes will add new functionality but will not break any existing code.
@@
  #### Q45. What does REPL stand for?
@@
  - [ ] run, examine, put, loop
  - [x] read, eval, print, loop
  - [ ] run, edit, print, loop
  - [ ] read, extend, print, loop
@@
  #### Q46. Which file does node-gyp use to read the build configuration of a module?
@@
  - [ ] .gyprc
  - [x] binding.gyp
  - [ ] gyp.json
  - [ ] package.gyp
@@
  #### Q47. Which core module in Node can you use for testing?
@@
  - [ ] chai
  - [ ] jest
  - [x] assert
  - [ ] mocha
@@
  #### Q48. Which core module in Node provides an API to register callbacks to track asynchronous resources created inside a Node.js application?
@@
  - [ ] cluster
  - [x] async_hooks
  - [ ] dgram
  - [ ] inspector
@@
As stated earlier, the Async Hooks class is a core Node.js module that provides an API for tracking asynchronous resources in your Node.js application. 
This also includes tracking of resources created by native Node modules such as fs and net.
@@
  #### Q49. Which Node.js module should you use when you need to decode raw data into strings?
@@
  - [ ] buffer
  - [ ] util
  - [x] string_decoder
  - [ ] string_buffer
@@
  #### Q50. Which global object acts like a bridge between a Node script and the host operating system?
@@
  - [ ] v8
  - [ ] env
  - [x] process
  - [ ] child_process
@@
  **Explanation:** \_process is an global object and act like a bridge, the others aren't
@@
  1. [source](https://nodejs.org/api/globals.html)
  2. [source](https://nodejs.org/api/process.html#process_process)
@@
  #### Q51. Which statement is true about Node.js and threads?
@@
  - [ ] Every Node process runs in a single thread, and all the I/O work is run in that same thread.
  - [ ] Every Node process gets four threads that it can share between its JavaScript VM and the event loop.
  - [x] The event loop is single-threaded, but a JavaScript VM can use multiple threads.
  - [ ] JavaScript execution in Node.js is single-threaded, but I/O operations are executed using multiple threads.
@@
  **Explanation:** _https://www.geeksforgeeks.org/why-node-js-is-a-single-threaded-language/_
@@
  #### Q52. Which statement about event emitters is false?
@@
  - [x] Event names must be camelCase strings.
  - [ ] The emit method allows a arbitrary set of arguments to be passed to the listener functions.
  - [ ] Any values returned by the listeners for an emitted events are ignored.
  - [ ] When an event emitter objeect emits an event, all of the functions attached to that specific event are called synchronously.
@@
  #### Q53. Which core module in Node can you use to compile and run JavaScript code in a sandbox environment?
@@
  - [ ] sandbox
  - [ ] buffer
  - [x] vm
  - [ ] v8
@@
  #### Q54. How would you determine the number of cluster instances to start when using the cluster module?
@@
  - [ ] const numInstances = cluster.instances().length;
  - [ ] const numInstances = cluster.instances();
  - [x] const numInstances = require('os').cpus().length;
  - [ ] const numInstances = process.cpus().length;
@@
  **Explanation:** _From official docs: [https://nodejs.org/api/cluster.html#cluster_cluster](https://nodejs.org/api/cluster.html#cluster_cluster)_
@@
  #### Q55. You have to read a large text file, replace some words in it, and write it back to a new file. You know that the memory on your target system is limited. What should you do?
@@
  - [ ] Use regular expressions directly on the file.
  - [ ] Use Promises and async/await to offload the task to libuv.
  - [ ] Copy the file into a database and perform the operations there.
  - [x] Use readline together with streams to read and transform and write the file contents line by line.
@@
  **Explanation:** _From official docs: [https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line](https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line)_
@@
  #### Q56. Which choice is 'not' a Node global object?
@@
  - [ ] process
  - [ ] exports
  - [ ] setTimeout
  - [x] Buffer
@@
  **Explanation:** _process, exports and setTimeout are global objects, Buffer isn't (please see https://nodejs.org/api/globals.html)_
@@
  #### Q57. What is the correct way to pipe a readable stream and a writable stream?
@@
  - [x] readableStream.pipe(writableStream)
  - [ ] readableStream.on(pipe, writableStream)
  - [ ] writableStream.pipe(readableStream)
  - [ ] writableStream.on(pipe, readableStream)
@@
  #### Q58. How can you convert path segments into a string using the platform-specific separator as a delimiter?
@@
  - [ ] path.concat
  - [x] path.join
  - [ ] path.format
  - [ ] path.parse
@@
  #### Q59. What is the purpose of N-API?
@@
  - [ ] to allow users to make requests to the server
  - [x] to insulate Addons from changes in the underlying JavaScript engine
  - [ ] to execute multi-threaded code in the Node environment
  - [ ] to provide a quick way for users to create REST APIs
@@
  #### Q60. What is a process object and its role?
@@
  - [ ] a locally scoped object that provides information about the current node process
  - [ ] a global object that provides information about files
  - [ ] a global object that provides information about the database
  - [x] a global object that provides information about the current node process
@@
  #### Q61. What will this code log to the console?
@@
  '''
  // File: person.js
  exports.name = "Jane";
@@
  // File: index.js
  const person = require('./person.js');
  console.log(person);
  '''
@@
  - [ ] '{'Jane'}'
  - [x] '{ name: 'Jane' }'
  - [ ] '{}'
  - [ ] 'Jane'
@@
  #### Q62. What will this code log to the console?
@@
  '''
  // File: person.js
  exports = "John";
@@
  // File: index.js
  const person = require('./person.js');
  console.log(person);
  '''
@@
  - [ ] 'John'
  - [ ] 'Undefined'
  - [ ] '{'John'}'
  - [x] '{}'
@@
  #### Q63. Is it possible to write tests in Node.js without an external library?
@@
  - [x] yes, through the assert module
  - [ ] yes, through the debugger module
  - [ ] yes, through the console module
  - [ ] no
@@
  **From the article:** [Making a Testing Framework in Node.js (Without any External Libraries)](https://www.sohamkamani.com/blog/javascript/making-a-node-js-test-runner/)
@@
  #### Q64. Which assert module method is usually used to test the error-first argument in callbacks?
@@
  - [ ] fail
  - [ ] doesNotThrow
  - [ ] deepStrictEqual
  - [x] ifError
@@
  #### Q65. Which choice is not a method on the util module?
@@
  - [ ] promisify
  - [x] asyncify
  - [ ] types
  - [ ] callbackify
@@
  #### Q66. Which choice is not a subclass of the Error class?
@@
  - [x] GlobalError
  - [ ] TypeError
  - [ ] RangeError
  - [ ] AssertionError
@@
  #### Q67. What is Node built on?
@@
  - [ ] Python
  - [x] V8 JavaScript engine
  - [ ] PHP
  - [ ] c
@@
  #### Q68. How does it affect the performance of a web application when an execution path contains a CPU-heavy operation, such as calculating a long Fibonacci sequence?
@@
  - [ ] As Node.js is asynchronous, this is handled by a libuv and a threadpool. The performance will not notably degrade.
  - [ ] As the application code runs asynchronously within a single thread, the execution will block, accepting no more requests until the operation is completed.
  - [ ] As Node.js is asynchronous, this is handled by a threadpool and the performance will not notably degrade.
  - [x] The current thread will block until the executon is completed and the operating system will spawn new threads to handle incoming requests. This can exhaust the number of allowed threads (255) and degrade performance over time.
@@
  #### Q69. What is used for parsing and running Javascript in Node.js?
@@
  - [ ] EventLoop
  - [ ] Libuv
  - [x] Google V8
  - [ ] Express.js
@@
  #### Q70. What is the importance of having good practices around status code in your response?
@@
  - [x] It indicates success or failure to the client and helps with testing.
  - [ ] It is not important to have good practices regarding status codes
  - [ ] Response codes are the only way you can tell what is happening on the server.
  - [ ] It contains information about the current performance of the server.
@@
  #### Q71. How can ECMAScript modules be used natively in Node?
@@
  - [x] ECMAScript modules cannot be used natively in Node.
  - [ ] ECMAScript modules can be used natively in Node with the .mjs file extension
  - [ ] ECMAScript modules can be used natively in Node only by using a compiler like Babel.
  - [ ] ECMAScript modules can be used natively in Node only by using a bundle like webpack.
@@
  #### Q72. When exploring the Node documentation's features, what are the stability ratings?
@@
  - [x] They are an indication of the stability of Nodejs modules and usage recommendations.
  - [ ] They tell if a feature is ES6 compliant.
  - [ ] They are a Node command to validate stability of your code.
  - [ ] They tell if a feature is LTS (Long Term Supported).
@@
  #### Q73. Which coice is a core module in Node?
@@
  - [x] crypto
  - [ ] chalk
  - [ ] webpack
  - [ ] request
@@
  [Reference](https://nodejs.org/api/documentation.html)
@@
  #### Q74. Which DNS module method uses the underlying OS facilities and does not necessarily perform any network communication?
@@
  - [ ] resolve
  - [ ] reverse
  - [x] lookup
  - [ ] resolve4
@@
  [Reference](https://nodejs.org/api/dns.html#dnslookuphostname-options-callback)
  @@
  #### Q75. What does SSL stand for?
@@
  - [ ] Secure Server Layer 
  - [ ] Save Sockets Landing 
  - [x] Secure Sockets Layer 
  - [ ] Secure Sockets Laws 
  @@
  #### Q76. Which is not a util's method?
@@
var util = require('util');
@@
  - [ ] deprecate()
  - [ ] format() 
  - [x] emmulate() 
  - [ ] inherits() 
  @@
  ####Q77. What is DNS?
  @@
  - [x] Domain Name System
  - [ ] Distributed Name System
  - [ ] Distance Number System
  - [ ] None of it
  @@
  ####Q78. How does DNS(Domain Name System) work?
  @@
  The process of DNS resolution involves converting a <?> into a computer-friendly IP address (such as 192.168.1.1).
  @@
  - [x] hostname (such as www.example.com)
  - [ ] sitename (such as www.example.com)
  - [ ] resourcename (such as www.example.com)
  - [ ] domainname (such as www.example.com)
  @@
  ####Q79. Under the hood, NodeJS does not run our code directly, it wraps the entire code inside a function before execution.
   This function is termed as <?>
   @@
   - [x]  Module Wrapper Function
   - [ ]  Model Wrapper Function
   - [ ]  Wrapper Function
   - [ ]  The correct name is not provided here
   @@
   ####Q80. What returns the string that identifies the underlying architecture, like arm, x64, arm64?
   @@
   - [x] os.arch()
   - [ ] os.cpus()
   - [ ] os.endianness()
   - [ ] os.freemem()
   @@
   An ARM-based CPU is a family of processors based on reduced instruction set computer (RISC) architecture
   @@
   ####Q81. What returns the number of bytes that represent the available memory in the system.
   @@
   - [x] os.freemem()
   - [ ] os.homedir()
   - [ ] os.loadavg()
   - [ ] os.platform()
   @@
   #### Q82. Which built-in Node module can be used for testing?
@@
- [x] assert
- [ ] chai
- [ ] jest
- [ ] mocha
@@
#### Q83. What happens if you execute the 'node' command without any arguments?
@@
- [x] Node will use its 'repl' module to start a REPL session.
- [ ] Node will run the index.js file in the current directory if one exists.
- [ ] Node will interactively ask you about your script name.
- [ ] Node will print an error stating that arguments are required.
@@
#### Q84. How can you read the content of a large file without buffering it in memory?
@@
- [x] Use 'fs.createReadStream'
- [ ] Use 'fs.createWriteStream'
- [ ] Use 'fs.readFileChunk'
- [ ] Use 'stream.readFile'
@@
#### Q85. How do you start a REPL session in Node.js?
@@
- [x] Use the 'node' command without a script.
- [ ] Use the 'v8' command.
- [ ] Use the 'noderepl' command.
- [ ] Use the 'node' command with a '--repl' option.
@@
#### Q86. Which of the following is a valid Node HTTP server that accepts connection on port 3000?
@@
- [x] 'require('http').createServer(() => {}).listen(3000)'
- [ ] 'require('http').listen(3000).on('connection', () => {})'
- [ ] 'require('http').createServer(3000, () => {})'
- [ ] 'require('http')().listen(3000).on('connection, () => {});'
@@
#### Q87. With the EventEmitter class in scope, what will the following code do?
@@
const myEmitter = new EventEmitter();
''myEmitter.on('MyEvent', (args) => 
{'    console.log(args);'});
''myEmitter.once('MyEvent', (args) => {'    console.log(args);
  '});''myEmitter.emit('MyEvent', 'Hello');
  'myEmitter.emit('MyEvent', 'Hello Again');
@@
- [x] It will print:
Hello
Hello
Hello Again
- [ ] It will print&nbsp;
Hello
Hello
Hello Again
Hello Again
- [ ] It will throw a circular event emitting error.
- [ ] It will print:
Hello
Hello Again
@@
#### Q88. What is wrong with the following code snippet?
@@
const url = require('url');
''const urlObject = {'    protocol: 'https','    hostname: 'www.example.com','    pathname: 'my-article','    hash: 'overview','};
''const formattedUrl = url.formatUrl(urlObject);''console.log(formattedUrl);
@@
- [x] The 'formatUrl' method is invalid; 'format' should be used instead.
- [ ] The 'formatUrl' method requires a second parameted to specify the URL type.
- [ ] The 'pathname' parameter is invalid; 'path' should be used instead.
- [ ] The 'url' library does not offer URL formatting methods; the 'build' method should be used instead.
@@
#### Q89. How can you remove a file using Node's 'fs' module?
@@
- [x] 'fs.unlink'
- [ ] 'fs.removeFile'
- [ ] 'fs.remove'
- [ ] 'fs.deleteFile'
@@
#### Q90. Which 'fs' module method can be used to get an array of files?
@@
- [x] 'fs.readdir'
- [ ] 'fs.readFiles'
- [ ] 'fs.getFiles'
- [ ] 'fs.open'
@@
#### Q91. What is the difference between the 'readFileSync' and 'openSync' methods?
@@
- [x] When using 'readFileSync', the open, read, and close operations are performed automatically, while 'openSync' only opens the file so you can perform operations on it.
- [ ] The 'readFileSync' method is used to programmatically read the file contents, while 'openSync' is used to preview the file contents using the Node.js command line.
- [ ] The 'openSync' method is used to open folders for listing their contents, while the 'readFileSync' is used to read individual files.
- [ ] The 'openSync' method needs to be called before 'readFileSync' to prepare the file for reading.
@@
#### Q92. In which situation can you use the 'DiffieHellman' class in Node.js?
@@
- [x] When creating Diffie-Hellman public key exchanges to establish a shared secret key
- [ ] When you need to generate public and private keys for the Rivest–Shamir–Adleman (RSA) algorithm
- [ ] When you need to factorize large prime numbers in an efficient manner
- [ ] When hashing data using the Diffie-Hellman algorithm to secure passwords in a database
@@
#### Q93. You are working on a Node.js application, implementing several 'npm' scripts. You would like to define a script called 't-notify' that prints 'Final testing process starting up'. You do not have any other existing scripts added to your package.json file yet.&nbsp;
@@
- [x] "scripts": {'        "t-notify": "echo Final testing process starting up"'    },
- [ ] "scripts": {'        "t-notify": "Final testing process starting up"'    },
- [ ] "scripts": {'        t-notify: "Final testing process starting up"'    },
- [ ] "run": {'        t-notify: "Final testing process starting up"'    },
@@
#### Q94. What can you do with the Verify class in Node.js?
@@
- [x] Verify digital signatures
- [ ] Verify the integrity of a file
- [ ] Verify the owner of a file
- [ ] Verify the status of the running process
@@
#### Q95. How can you declare a new worker thread in Node.js?
@@
- [x] const { Worker } = require('worker_threads')'const worker1 = new Worker('./workerService.js');
- [ ] const { Worker } = require('worker_threads')'const worker1 = Worker.create('./workerService.js');
- [ ] const { Worker } = require('workers')'const worker1 = new Worker('./workerService.js');
- [ ] const { Worker } = require('worker_threads')'const worker1 = new WorkerThread('./workerService.js');
@@
#### Q96. How would you create a new instance of the 'DiffieHellman' class?
@@
- [x] By using the 'createDiffieHellman' method from the 'crypto' module
- [ ] By using the 'getDH' method from the 'crypto' module
- [ ] By using the new keyword to directly instantiate a new DiffieHellman class
- [ ] By using the 'createDH' method from the 'crypto' module
@@
#### Q97. How would you create a hash digest using the 'Hash' class in Node.js?
@@
- [x] const crypto = require('crypto');'const hash = crypto.createHash('sha256');''hash.update('Text to hash.');'const hashedOutput = hash.digest('base64');
- [ ] const crypto = require('crypto');'const hash = crypto.createHash('sha256');''hash.update('Text to hash.');'const hashedOutput = hash.final('base64');
- [ ] const crypto = require('crypto');'const hash = crypto.createHash();''hash.setAlgorithm('sha256');'hash.update('Text to hash.');'const hashedOutput = hash.digest('base64');
- [ ] const crypto = require('crypto');'const hash = new Hash('sha256');''hash.update('Text to hash.');'const hashedOutput = hash.digest('base64');
@@
#### Q98. Which version string means "all versions greater than or equal to 1.2.3, but less than 2.0.0?"
@@
- [x] '^1.2.3'
- [ ] '>=1.2.3'
- [ ] '1.*'
- [ ] '~1.2.3'
@@
#### Q99. What is true about installing packages using 'npm'?
@@
- [x] Packages existing on the local file system can be installed.
- [ ] Tarballs of the type '.tgz' cannot be installed.
- [ ] Tarballs can only be installed from the local file system.
- [ ] Packages from GitHub cannot be directly installed.
@@
#### Q100. Which command prints all local packages that need updating?
@@
- [x] 'npm outdated'
- [ ] 'npm update'
- [ ] 'npm view'
- [ ] 'npm verify'
@@
#### Q101. If the application needs to read the value of an environment variable, what is required to access the 'process' variable?
@@
- [x] The 'process' variable is automatically available in any Node.js file.
- [ ] The 'process' variable is attached to the globally available 'window' object.
- [ ] The 'process' module needs to be imported.
- [ ] The 'system' module needs to be imported.
@@
#### Q102. what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible?
@@
- [x] event loop
- [ ] multiple threads
- [ ] libuv
- [ ] v8
@@
#### Q103. In this phase of the event loop callbacks scheduled by setTimeout() and setInterval() are executed.
@@
- [x] timers
- [ ] pending callbacks
- [ ] check
- [ ] close callbacks
@@
#### Q104. This phase of the event  loop starts after 'poll'.
@@
- [x] check
- [ ] idle, prepare
- [ ] pending callbacks
- [ ] timers
@@
#### Q105. This phase of the event  loop starts after 'close callbacks'.
@@
- [x] timers
- [ ] idle, prepare
- [ ] pending callbacks
- [ ] check
#### Q106. This phase of the event  loop  is between  'idle, prepare' and 'check'.
@@
- [x] poll
- [ ] idle, prepare
- [ ] pending callbacks
- [ ] check
#### Q107. This phase of the event loop starts before 'close callbacks'.
@@
- [x] check
- [ ] timers
- [ ] poll
- [ ] pending callbacks
@@
#### Q108. This phase of the event loop starts before 'idle, prepare'.
@@
- [x] pending callbacks
- [ ] timers
- [ ] poll
- [ ] close  callbacks
@@
#### Q109. This phase of the event loop is only used internally.
@@
- [x] idle, prepare
- [ ] timers
- [ ] poll
- [ ] close  callbacks
@@
#### Q110. This phase of the event loop executes I/O callbacks deferred to the next loop iteration.
@@
- [x] pending callbacks
- [ ] timers
- [ ] poll
- [ ] check
@@
#### Q111. Any time you call <?> in a given phase, all callbacks passed to <?> will be resolved before the event loop continues.
  @@
  - [x] process.nextTick()
  - [ ] process.continue()
  - [ ] setImmediate()
  - [ ] setImmediate(callback)
  @@
  #### Q112. The exports is an object. 
  So, you can attach <?> to it.
   @@
   - [x] properties or methods
   - [ ] methods
   - [ ] properties
   - [ ] anything
   @@
   exports.SimpleMessage = 'Hello world';
    //or
    module.exports.SimpleMessage = 'Hello world';
    @@
    #### Q113. Which of the following statements are true?
    @@
    - [x] Node.js is a server-side language.
    - [ ] Node.js is a client-side language.
    - [ ] Node.js is both a server and client-side language.
    - [ ] None of the above.
    @@
    
     #### Q114. _____ is an interactive shell that processes Node.
    @@
    - [x] REPL
    - [ ] REAL
    - [ ] RESP
    - [ ] None of the above
    @@
    
     #### Q115. What is the full form of REPL?
    @@
    - [x] Read Eval Print Loop
    - [ ] Research Eval Program Learn
    - [ ] Read Earn Point Learn
    - [ ] Read Eval Point Loop
    @@
    
     #### Q116. Node.js is written in which language?
    @@
    - [x] JavaScript
    - [ ] C++
    - [ ] C
    - [ ] Java
    @@
    
     #### Q117. How can we install the node body-parser module?
    @@
    - [x] npm install body-parser
    - [ ] node install body-parser
    - [ ] node.js install body-parser
    - [ ] None of the above
    @@
    
     #### Q118. Which of the following are examples of node modules?
    @@
    - [x] All of the above
    - [ ] Express
    - [ ] Body-parser
    - [ ] Socket.io
    @@
    
     #### Q119. To include the HTTP server in the node module, what function do we use?
    @@
    - [x] require()
    - [ ] get()
    - [ ] createServer()
    - [ ] None of the above
    @@
    
     #### Q120. How can we expose node modules?
    @@
    - [x] exports
    - [ ] expose
    - [ ] requires
    - [ ] None of the above
    @@
    
     #### Q121. What method is used to return the current working directory of the process?
    @@
    - [x] cwd()
    - [ ] pwd()
    - [ ] cmd()
    - [ ] None of the above
    @@
    
     #### Q122. Default scope in Node.js application is?
    @@
    - [x] Local
    - [ ] Global
    - [ ] Local to Object
    - [ ] None of the above
    @@
    
     #### Q123. How many node objects methods are available?
    @@
    - [x] 18
    - [ ] 21
    - [ ] 19
    - [ ] 20
    @@
    
     #### Q124. We can kill a process in Node.js using the keyboard shortcut?
    @@
    - [x] Ctrl + C
    - [ ] Ctrl + B
    - [ ] Ctrl + K
    - [ ] None of the above
    @@
    
     #### Q125. What is the full form of npm?
    @@
    - [x] Node Package Manager
    - [ ] Node Project Manager
    - [ ] New Project Manager
    - [ ] New Package Manager
    @@
    
     #### Q126. How can we initiate a NodeJS file called Hello in Node?
    @@
    - [x] node Hello.js
    - [ ] Hello,js
    - [ ] javascript Hello.js
    - [ ] node Hello
    @@
    
     #### Q127. NodeJS is supported on which of the following platforms?
    @@
    - [x] All of the above
    - [ ] Windows
    - [ ] MAC OS
    - [ ] Unix/Linux
    @@
    
     #### Q128. ____ is a debugging tool for NodeJS?
    @@
    - [x] Node Inspector
    - [ ] REPL
    - [ ] Node Console
    - [ ] None of the above
    @@
    
     #### Q129. The node object property which is used to return the node just before the current node is?
    @@
    - [x] previousSibling
    - [ ] localName
    - [ ] index
    - [ ] None of the above
    @@
    
     #### Q130. The advantages of using node modules are?
    @@
    - [x] All of the above
    - [ ] Provides a means of dividing up tasks
    - [ ] Provides a means of reuse of program code
    - [ ] Provides a means of testing individual parts of the program
    @@
    
     #### Q131. Which of the following are examples of NodeJS streams types?
    @@
    - [x] All of the above
    - [ ] Writable
    - [ ] Duplex
    - [ ] Readable
    @@
    
     #### Q132. The command to install nodemon in NodeJS is?
    @@
    - [x] npm install -g nodemon
    - [ ] node install -g nodemon
    - [ ] npm nodemon
    - [ ] node nodemon
    @@
    
     #### Q133. Which of the following are built-in node modules?
    @@
    - [x] All of the above
    - [ ] zlib
    - [ ] https
    - [ ] dgram
    @@
    
     #### Q134. _ variable in REPL session of NodeJS is used for?
    @@
    - [x] It is used to get the last result
    - [ ] It is used to store the result
    - [ ] It is used to get the last command that was used
    - [ ] None of the above
    @@
    
     #### Q135. Which of the following statements are true?
    @@
    - [x] Statement 2 is true and statement 1 is false.
    - [ ] Both statements are true.
    - [ ] Both statements are false.
    - [ ] Statement 1 is true and statement 2 is false.
    @@
    
     #### Q136. When does a stream fire a data event?
    @@
    - [x] When there is data to read.
    - [ ] When there is data to write
    - [ ] When there is no data available
    - [ ] None of the above
    @@
    
     #### Q137. For path specific operations which of the following operations is required to be used?
    @@
    - [x] Path Module
    - [ ] OS Module
    - [ ] Fs Module
    - [ ] None of the above
    @@
    
     #### Q138. Which of the following operations can we do with the NodeJS events module?
    @@
    - [x] All of the above
    - [ ] Create
    - [ ] Listen for
    - [ ] Fire
    @@
    
     #### Q139. How can we check the installed version of Node?
    @@
    - [x] node –version
    - [ ] npm –version
    - [ ] npm getVersion
    - [ ] None of the above
    @@
    
     #### Q140. What command do we use to list all the node modules that are installed globally?
    @@
    - [x] npm ls -g
    - [ ] node ls -g
    - [ ] npm ls
    - [ ] node ls
    @@
    
     #### Q141. Which of the following is a valid HTTP method?
    @@
    - [x] All of the above
    - [ ] get
    - [ ] put
    - [ ] post
    @@
    
     #### Q142. Which of the following fs module is used to close a file?
    @@
    - [x] fs.close()
    - [ ] fs.closeFile()
    - [ ] fs.closePath()
    - [ ] None of the above
    @@
    
     #### Q143. Which of the following NodeJS module splits up a web address into readable parts?
    @@
    - [x] URL
    - [ ] Express
    - [ ] Cors
    - [ ] None of the above
    @@
    
     #### Q144. NodeJS uses an event-driven, non-blocking IO model?
    @@
    - [x] True
    - [ ] False
    - [ ] Cannot be determined
    - [ ] None of the above
    @@
    
     #### Q145. Which NodeJS statement is used to list all the locally installed NodeJS modules?
    @@
    - [x] Is
    - [ ] list
    - [ ] cwd
    - [ ] None of the above
    @@
    
     #### Q146. A visual development environment for NodeJS is?
    @@
    - [x] Node-Red
    - [ ] Visual Studio
    - [ ] IntelliJ
    - [ ] NetBeans
    @@
    
     #### Q147. Which of the following NodeJS modules is used for file uploads?
    @@
    - [x] formidable
    - [ ] fs
    - [ ] express
    - [ ] files
    @@
    
     #### Q148. Which node module is used to handle binary data?
    @@
    - [x] buffer
    - [ ] binary
    - [ ] crypto
    - [ ] dgram
    @@
    
     #### Q149. Which node module is used for zip and unzip functionalities?
    @@
    - [x] ZLIB
    - [ ] buffer
    - [ ] binary
    - [ ] None of the above
    @@
    
     #### Q150. Which of the following is used for cryptographic protocols to secure communication over the web?
    @@
    - [x] TLS/SSL
    - [ ] TCP/IP
    - [ ] Both A and B
    - [ ] None of the above
    @@
    SSL - Secure Sockets Layer 
    TLS - Transport Layer Security
    @@
     #### Q151. Which node module is used to serve static resources in NodeJS?
    @@
    - [x] node-static
    - [ ] static
    - [ ] http
    - [ ] None of the above
    @@
    
     #### Q152. _____ is a software service that allows 2 or more applications to talk to each other?
    @@
    - [x] API
    - [ ] REST
    - [ ] Both A and B
    - [ ] None of the above
    @@
    
     #### Q153. Which of the following are StringDecoder class methods?
    @@
    - [x] Both A and B
    - [ ] decoder.write()
    - [ ] decoder.end()
    - [ ] None of the above
    @@
    
     #### Q154. Which of the following NodeJS modules is now deprecated?
    @@
    - [x] punycode
    - [ ] os
    - [ ] express
    - [ ] None of the above
    @@
    
     #### Q155. What does the fs module stand for?
    @@
    - [x] File System
    - [ ] File Store
    - [ ] File Service
    - [ ] None of the above
    @@
    
     #### Q156. Which of the following are the benefits of using modules?
    @@
    - [x] All of the above
    - [ ] Provides a means of dividing up tasks.
    - [ ] Provides a means of resuing program codes
    - [ ] Provides a means of testing individual parts of a program.
    @@
    
     #### Q157. Applications built on NodeJS can access which of the following types of databases?
    @@
    - [x] Both A and B
    - [ ] NoSQL Databases
    - [ ] SQL Databases
    - [ ] None of the above
    @@
    
     #### Q158. Which of the following are NodeJS global objects?
    @@
    - [x] All of the above
    - [ ] __dirname
    - [ ] __filename
    - [ ] Buffer
    @@
    
     #### Q159. JSON was natively constructed on which language?
    @@
    - [x] Javascript
    - [ ] Java
    - [ ] C++
    - [ ] None of the above
    @@
    
     #### Q160. Which NodeJS object specifies the name of the directory which contains the code?
    @@
    - [x] __dirname
    - [ ] Buffer
    - [ ] __filename
    - [ ] None of the above
    @@
    
     #### Q161. What function is used to fire an event?
    @@
    - [x] emit()
    - [ ] fire()
    - [ ] calc()
    - [ ] None of the above
    @@
    
     #### Q162. Which of the following parameters is taken by the buffer.toString method?
    @@
    - [x] All of the above
    - [ ] encoding
    - [ ] start
    - [ ] end
    @@
    
     #### Q163. What is a callback?
    @@
    - [x] The callback is an asynchronous equivalent for a function
    - [ ] The callback is a technique in which a method calls back the caller method
    - [ ] Both A and B
    - [ ] None of the above
    @@

    #### Q164. Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.
    What makes streams really powerful?
    @@
    - [x] streams read chunks of data piece by piece, processing its content without keeping it all in memory
    - [ ] streams read chunks of all at once, processing its content without keeping it all in memory
    - [ ] streams read chunks of data piece by piece, processing its content and keep it all in memory
    - [ ] streams read chunks of data piece by piece, without processing its content keeping it all in memory
    @@
    Using streams to process smaller chunks of data, makes it possible to read larger files.
    @@
    #### Q165. Which is not an advantage of using streams?
    @@
    - [x] Space efficiency: they occupy little space on your disc
    - [ ] Memory efficiency: you don’t need to load large amounts of data in memory before you are able to process it
    - [ ] Time efficiency: it takes significantly less time to start processing data as soon as you have it, rather than having to wait with processing until the entire payload has been transmitted
    - [ ] They all are advantages
    @@
    #### Q166. Match the streams with their description.
    @@
   A streams to which we can write data. 
   For example, fs.createWriteStream() lets us write data to a file using streams.
   B streams from which data can be read.
    For example: fs.createReadStream() lets us read the contents of a file.
   C streams that are both Readable and Writable. 
   For example, net.Socket
   D streams that can modify or transform the data as it is written and read.
    For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.
    @@
    - [x] A -Writable, B -Readable, C -Duplex, D -Transform
    - [ ] A -Duplex, B -Readable, C -Writable, D -Transform  
    - [ ] A -Readable, B -Writable, C -Duplex, D -Transform    
    - [ ] A -Writable, B -Transform, C -Duplex, D -Readable
    @@
    #### Q167. How to create a readable stream? Choose the correct order of the lines.
    @@
    - [x] const Stream = require('stream')
          const readableStream = new Stream.Readable()
          readableStream.push('ping!')
          readableStream.push('pong!')
    - [ ] const readableStream = new Stream.Readable()
          readableStream.push('ping!')
          readableStream.push('pong!')
          const Stream = require('stream')
    - [ ] readableStream.push('pong!')
          const Stream = require('stream')
          readableStream.push('ping!')
          const readableStream = new Stream.Readable()
    - [ ] readableStream.push('pong!')
          const Stream = require('stream')
          const readableStream = new Stream.Readable()
          readableStream.push('ping!')
    @@
    #### Q168. You shouldn't mix async functions with this because currently, there is no way to catch a rejection when it is <?>ted within an event handler, causing hard to track bugs and memory leaks.
    @@
    - [x] EventEmitter
    - [ ] Your ass
    - [ ] Writable Streams
    - [ ] assert library
    @@
    #### Q169. What is missing in the following code?
    @@
    const { Readable } = require('stream');

async function * generate() {
  yield 'hello';
  yield 'streams';
}

const readable = Readable.<?>(generate());

readable.on('data', (chunk) => {
  console.log(chunk);
});
    @@
    - [x] from
    - [ ] on
    - [ ] of
    - [ ] listen
    @@
    stream.Readable.from(iterable, [options]) it’s a utility method for creating Readable Streams out of iterators, which holds the data contained in iterable. 
    Iterable can be a synchronous iterable or an asynchronous iterable. 
    The parameter options is optional and can, among other things, be used to specify a text encoding.
    @@
    #### Q170. According to Streams API, readable streams effectively operate in one of two modes: flowing and paused.
    Match the modes and their descriptions.
    @@
    A - data is read from the underlying system automatically and provided to an application as quickly as possible using events via the EventEmitter interface.
    B - the stream.read() method must be called explicitly to read chunks of data from the stream.
    @@
    - [x] A - flowing mode B - paused mode
    - [ ] A - paused mode B - flowing mode
    - [ ] there are tree modes actually
    - [ ] the currect mode names are incorrect
    @@
    In a flowing mode, to read data from a stream, it’s possible to listen to data event and attach a callback.
     When a chunk of data is available, the readable stream emits a data event and your callback executes.
     In paused mode, you just need to call read() on the stream instance repeatedly until every chunk of data has been read.
     @@
     #### Q171. What does TLS stand for? 
     @@
     - [x] Transport Layer Security
     - [ ] Transfer Layer Security
     - [ ] Transportation Layer Security
     - [ ] Transform Layer Security
`;

  const dataArray = data.split('####').slice(1);

  const finalDataArray = randomQuestionLogic(dataArray, dataBlockNumber);

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomNodeQuestion;
