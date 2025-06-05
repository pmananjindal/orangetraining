//const myModule = require('./myModule');
//myModule.sayHello();
//myModule.sayGoodbye();
 
//const fs = require('fs');
//fs.readFile('./myModule'.'utf8',(err,data)=>{
//if(err) throw err;
//console.log(data);
//}
//)
 
//function greet(name, callback) {
//  console.log('hi' + '' + name);
//  callback();
//}
 
//function callme() {
//  console.log('Iam a call back function');
//}
 
//greet('Peter', callme);
//const fs = require('fs');
//fs.mkdir('mydir', (err)=>{
  //  if(err) throw err;
  //  console.log('Directory Cretaed');
//}
(function(){
    var doAsync = function(){
        var p = new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({msg:'doAsync promise fulfilled'});
                //reject({msg:'doAsync promise rejected'});
            },5000);
        });
        return p;
    }
    
    doAsync().then(function(response){
        console.log("Success : ",response.msg);
    },function(response){
        console.log("Failed : ",response.msg);
    });
})();
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet',(name)=>{
    console.log(`hello, ${name}`);
});

{
    function fetchData(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Data received");
            }, 1000);
        });
    }
}
async function main(){
    try{
        const result = await fetchData();
        console.log(result);

    }catch(error){
        console.error("Error:",error);
    }
    
}
main();
const http = require ("http");
const server = http.createServer(function(req,res){
    res.end("Hello world");
});
server.listen(3001,function(){
    console.log("Server is running on port 3001 nowdd");
})


