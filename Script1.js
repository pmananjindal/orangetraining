// JavaScript source code
//const myModule = require('./greetings');
//myModule.sayHello();
//myModule.sayGoodbye();

//const fs = require('fs');
//fs.readFile('./greetings', 'utf8', (err, data) => {
//    if (err) throw err;
//    conso.log(data);
//} )

//function greet(name, callback) {
 //   console.log('Hi' + '' + name);
//    callback();
//}

//function callme() {
//    console.log('callback function');
//}

//greet('peter', callme);

//const fs = require('fs');
//fs.mkdir('mydir1', (err) => {
//    if (err) throw err;
//    console.log('directory creeated');
//});

//const rm = require('fs');
//fs.rmdir('mydir1', (err) => {
//   if (err) throw err;
//    console.log('directory removed');
//});

//const fs = require('fs');
//const readableStream = fs.createReadStream('greetings.js', 'utf8');
//readableStream.on('data', (data) => {
//    console.log(data);
//});

//(function () {
//    var doAsync = function () {
//        var p = new Promise(function (resolve, reject) {
//            setTimeout(function () {
//                resolve({ msg:'doAsync promise completed' });
//            }, 5000);
//        });
//        return p;
//    }

 //   doAsync().then(function (response) {
 //       console.log("success", response.msg);
 //   }, function (response) {
 //      console.log("reject", response.msg);
//    });
//})();


//console.log("start");

//setTimeout(() => {
//    console.log("timeout");
//}, 5000);

//Promise.resolve().then(() => console.log("promise resolved"));

//console.log("end");


//const EventEmitter = require('event');

//const emitter = new EventEmitter();//

//emitter.on('greet', name => {
  //  console.log('hello, ${name} ');
//});

//emitter.emit('greet', 'alice');

//function fetchdata() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve("data recived");
        }, 20000);
    });
  }

async function main() {
    try {
        const result = await fetchdata();
        console.log(result);
    } catch (error) {
        console.error('error', error);
    }
}

main();
