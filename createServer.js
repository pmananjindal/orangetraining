const server = require("http");
const url = require("url");
const StringDecoder= require("string_decoder").StringDecoder;
var hhtp =server.createServer(function(req,res){
    const createuser = (trimmedPath,method) =>{
        if(trimmedPath === 'users')
            {
                res.end(`You have requested user and method is ${method}`);
            }
            else if(trimmedPath == 'posts'){
                res.end(`You have requested posts and method is ${method}`);
            }
            else{
               res.end("Hello world!");
            }
    }
    const parsedurl = url.parse(req.url,true);
    const method = req.method;
    const querString= parsedurl.query;
    const headers= req.headers;
    console.log(JSON.stringify(headers));
    console.log(JSON.stringify(querString));
    const decoder= new StringDecoder('utf8');
    let buffer;
    req.on('data',function(data){
        buffer += decoder.write(data);
    })
    req.on('end',function(){
        buffer +=decoder.end();
        console.log("Buffer" + buffer);
    })
    const path =parsedurl.pathname;
    console.log(path);
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    createuser(trimmedPath,method);
   
});

hhtp.listen(3000,function(){
    console.log("Server is up and running");
})