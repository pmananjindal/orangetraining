
//console.log(x)
//console.log(y)




function printHello(name){
    let x=10;
    var y=20;

    {
        let z=5
        var k=6
    }
    console.log(x)
    console.log(y)
    console.log(z)
    console.log(k)

    console.log(`hello ${name}`)
}

console.log(x)
console.log(y)
printHello('djndjnd')

let a = {};

let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
/*
{
    '[object Object]':123
};
*/
a[c] = 456;

console.log(a[b]);


/*


call stack 

event loop

call back queue [   ]

how nodejs works 

*/
