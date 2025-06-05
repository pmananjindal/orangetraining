// const myModule = require('./myModule');
// myModule.sayHello();
// myModule.sayGoodbye();

////////////////////////////////////////

// const fs = require('fs');
// fs.readFile('./myModule.js', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })


////////////////////////////////////////////

// //function
// function  greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }


/////////////////////////////////////////////////

// //callback function
// function callMe(){
//     console.log('I am callback function');
// }

// //passing function as an argument
// greet('Peter', callMe);


/////////////////////////////////////////////////


// const fs = require('fs');
// fs.mkdir('mydir1', (err) => {
//     if (err) throw err;
//     console.log('directory created');
// });
// fs.rmdir('mydir1', (err) => {
//     if (err) throw err;
//     console.log('directory removed');
// });

/////////////////////////stat////////////////////////

// const fs = require('fs');
// fs.lstat('./myModule.js', (err, stats) => {
//     if (err) {
//         console.error('Error checking file:', err);
//         return;
//     }
//     console.log('File stats:', stats);
// });


//////////////edit////////////////////////////////
// const fs = require('fs');
// const readableStream = fs.createReadStream('./myModule.js', 'utf8');
// readableStream.on('data', (data) => {}
//     console.log(data);
// });

//////////////////////////promise(async)////////////////////////
// (function (){
//     var doAsync = function(){
//         var p = new Promise(function(resolve, reject){
//             setTimeout(function(){
//                 resolve({msg:'doAsync promise fulfilled'});
//                 //reject({msg:'doAsync promise rejected'});
//             },5000);
//         });
//         return p;
//     }

//     doAsync().then(function(response){
//         console.log("Success : ", response.msg);
//     }, function(response){
//         console.log("Failed : ", response.msg);
//     });
// })();

////////////////////////queue/event loops//////////////////////////
// console.log("start");
// setTimeout(() => {
    // console.log("timeout");
// }, 5000);
// Promise.resolve().then(() => console.log("promise resolved"));
// console.log("end");

//////////////////////////On and emit events/////////////////////
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //register listener before emitter
// emitter.on('greet', (name) => {
//     console.log(`Hello, ${name}`);
// });

// //now emit the event
// emitter.emit('greet', 'Alice');

/////////////////await//////////////////////
// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("data recieved");
//         }, 1000);
//     });
// }

// async function main() {
//     try{
//         const result = await fetchData();
//         console.log(result); //"data recieved"
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// main();

/////////////////create server////////////////////
// const http = require("http");
// const url = require("url");
// const server = http.createServer(function (req, res) {
//     const createUsers = () => {
//         res.end("You have requested users");
//     }
//     const parsedUrl = url.parse(req.url, true);
//     console.log("parsedUrl is : ", parsedUrl);
//     const path = parsedUrl.pathname;
//     console.log("path is : ", path);
//     const trimmedPath = path.replace(/^\/+|\/+$/g, '');
//     console.log("trimmedPath is : ", trimmedPath);
//     if (trimmedPath === 'users') {
//         createUsers();
//         //res.end("You have requested users");
//     }
//     else if (trimmedPath === 'posts') {
//         res.end("You have requested posts");
//     }
//     else {
//         res.end("Hello World!!");
//     }
// });
// server.listen(3001, function () {
//     console.log("Server is running on port 3000 now");
// })


// const http = require("http");
// const url = require("url");
// const server = http.createServer(function (req, res) {
//     const createUsers = () => {
//         res.end("You have requested users");
//     }
//     const parsedUrl = url.parse(req.url, true);
//     //console.log("parsedUrl is : ", parsedUrl);
//     const path = parsedUrl.pathname;
//    // console.log("path is : ", path);
//     const trimmedPath = path.replace(/^\/+|\/+$/g, '');
//    // console.log("trimmedPath is : ", trimmedPath);
//     //get the query string as an object
//     // const queryStringObject = parsedUrl.query;
//     // console.log(JSON.stringify(queryStringObject))
//     //gets the header as an object
//     const headers = req.headers();
//     console.log(JSON.stringify(headers));
//     //console.log(req);
//     //get the http method
//     const method = req.method;

//     if (trimmedPath === 'users') {
//         createUsers();
//         //res.end("You have requested users");
//     }
//     else if (trimmedPath === 'posts') {
//         res.end("You have requested posts");
//     }
//     else {
//         res.end("Hello World!!");
//     }
// });
// server.listen(3001, function () {
//     console.log("Server is running on port 3001 now");
// })    


const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
//The server should respond to all requests with a string
const server = http.createServer(function(req,res){
// Get the url and parse it
const parsedUrl = url.parse(req.url,true);
console.log("Parsed Url",parsedUrl);
//Get the path
const path = parsedUrl.pathname;
const decoder = new StringDecoder('utf-8');
let buffer = '';
    req.on('data',function(data){
        buffer += decoder.write(data);
    })
    req.on('end',function(){
        buffer += decoder.end();
    //Send the response
        res.end("Hello World!!");
//Log the request path
        console.log('Request received with this payload', buffer);
})
})
//Start the server and listen and have it listen on 3001 port
server.listen(3001,function(){
console.log("Server is running on port 3001 now");
})
 












































