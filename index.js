"use strict";
function greet(name) {
    console.log(`Hello ${name}`);
}
function sum(a, b) {
    return a + b;
}
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return "false";
    }
}
// let sum2 = sum(2, '5')
console.log(typeof isLegal(19));
// console.log(sum(2 , '5'))
// greet('Diya')
// console.log(x);
function delayedFunction(func) {
    setTimeout(func, 2000);
}
function log() {
    console.log("It has been 2s");
}
delayedFunction(log);
