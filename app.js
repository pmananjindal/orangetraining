const http = require("http");
const { json } = require("stream/consumers");
const url = require("url");
const server = http.createServer(function(req,res){
    const createUser = (name)=>{
            res.end("You have requested users + " + `${name}`);
    }

    const postUser = (name)=>{
            res.end("You have requested posts + " + `${name}`);
    }
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // const queryString = parsedUrl.query;
    // console.log(JSON.stringify(queryString));

    const header = req.headers;
    console.log(JSON.stringify( header));
    const method = req.method.toLocaleLowerCase();
    if(trimmedPath==='users'){
        createUser(method);
        
    }
    else if(trimmedPath==='posts'){
      postUser(method);
    }
    else{
        res.end("Hello World!!");
    }1
});
server.listen(3000,function(){
    console.log("Server is running on port 3000 now");
})


// const myModule = require('./myModule');
// myModule.sayHello();
// myModule.sayGoodbye();

//const { promiseHooks } = require("v8");

// const fs = require('fs');
// fs.readFile('./myModule.js','utf8',(err, data) => {
//     if(err) throw err;
//     console.log(data);  
// })

// function greet(name , callback){
//     console.log('Hi' + ' ' + name);
//     callback();
// }
// function callMe(){
//     console.log("I am call back function");
// }

// greet('sujit', callMe);

// const fs = require('fs');
// fs.mkdir('myDir',(err)=>{
//     if(err) throw err;
//     console.log('DIR created sucessfuly');
// })

// fs.rmdir('myDir',(err1)=>{
//      if(err1) throw err1;
//     console.log('DIR removed sucessfuly');
// })

// const fs = require('fs');
// fs.stat('service/myModule.js', (err, stats) => {
//     if (err) {
//         console.error('Error checking file:', err);
//         return;
//     }
//     console.log('File stats:', stats);
// });

// const fs = require('fs');
// const readableStream = fs.createReadStream('./myModule.js','utf8');
// readableStream.on('data',(data)=>{
//     console.log(data);
// })

// (function(){
//     var doAsync = function(){
//         var p = new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 //resolve({msg:'doAsync promise fulfilled'});
//                 reject({msg:'doAsync promise rejected'});
//             },5000);
//         });
//         return p;
//     }
    
//     doAsync().then(function(response){
//         console.log("Success : ",response.msg);
//     },function(response){
//         console.log("Failed : ",response.msg);
//     });
// })();

// const EventEmitter = require('events');
// const emmiter = new EventEmitter ();

// emmiter.on('greet',(name)=>{
//     console.log(`Hi  ${name}`)
// });

// emmiter.emit('greet','sujit');

//async and await example
// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//            resolve("Data Received"); 
//         }, 10000);
//     })
// }

// async function main() {
//     try {
//         const result = await fetchData();
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// } 
// main();