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











//My code Below


// const http = require("http");
// const url = require("url");
// const server = http.createServer(function(req,res){
// const createUsers = (method)=>{
//     res.end('You have requested to create users+ ${method}');
// }
//     const parsedUrl = url.parse(req.url,true);
//     const path = parsedUrl.pathname;
//     const trimmedPath = path.replace(/^\/+|\/+$/g,'');
//     //console.log(req);
//     // const queryStringObject =parsedUrl.query;
//     // console.log(JSON.stringify(queryStringObject));
//     const headers=req.headers;
//     console.log(JSON.stringify(headers));

//     const method=req.method;
//     if(trimmedPath==='users'){

//       createUsers();
//       //  res.end("You have requested users");
//     }
//     else if(trimmedPath==='posts'){
    
//         res.end("You have requested posts");
//     }
//     else{
//         res.end("Hello World!!");
//     }
// });
// server.listen(3000,function(){
//     console.log("Server is running on port 3000 now");
// })









// // function fetchData(){
// //     return new Promise((resolve)=>{
// //         setTimeout(()=>{

// //             resolve("Data recieved");
// //         },1000);
// //     });
// // }

// // async function main(){
// // try {
// //     const result= await fetchData();
// //     console.log(result);

// // }
// // catch(error){
// //     console.error("error",error);
// // }


// // }
// // main();


// // //const myModule = require('./myModule');
// // //myModule.sayHello();
// // //myModule.sayGoodbye();

// // //const fs = require('fs');
// // //fs.readFile('./myModule'.'utf8',(err,data)=>{
// // //if(err) throw err;
// // //console.log(data);
// // //}
// // //)

// // //function greet(name, callback) {
// // //	console.log('hi' + '' + name);
// // //	callback();
// // //}

// // //function callme() {
// // //	console.log('Iam a call back function');
// // //}

// // //greet('Peter', callme);
// // // const fs = require('fs');
// // // fs.mkdir('mydir', (err)=>{
// // // 	if(err) throw err;
// // // 	console.log('Directory Cretaed');
// // // }
// // // )

// // // const fs = require('fs');
// // // fs.stat('myModule.js', (err, stats) => {
// // //     if (err) {
// // //         console.error('Error checking file:', err);
// // //         return;
// // //     }
// // //     console.log('File stats:', stats);
// // // });
// // // const fs = require('fs');
// // // const readableStream =fs.createReadStream('./myModule.js', 'utf8');
// // // readableStream.on('data', (data) =>{
// // // 	console.log(data);
// // // })
// // (function(){
// // 	var doAsync = function(){
// // 		var p = new Promise(function(resolve,reject){
// // 			setTimeout(function(){
// // 				resolve({msg:'Do asynch promise fullfilled'});
// // 				reject({msg:'do asynch promise rejected'});
// // 			},5000);
// // 		});
// // 		return p;
// // 	}

// // doAsync().then(function(response){
// //         console.log("Success : ",response.msg);
// //     },function(response){
// //         console.log("Failed : ",response.msg);
// //     });
// // })();



