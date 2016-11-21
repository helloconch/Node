'use strict'
var s='Hello';
console.log(s);
function greet(name){
    console.log(s+',' +name);
}

function calc(){
    console.log('calc method');
}
// module.exports=greet;
module.exports={
    greetM:greet,
    calcM:calc
};