function greet(name , callback){
    console.log('Hi' + ' ' + name);
    callback();
}

greet('sujit',callMe);

function callMe(){
    console.log("I am call back function");
}
