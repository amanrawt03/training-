// Callback is a functon which is passed as an argument in another function 
function solve(callback, a, b) {
    callback(a, b);
}

function sum(a, b) {
    console.log(a + b);
}
solve(sum, 3, 5); // 8

// Callbacks are most often used to handle asynchronous functions
// setTimeout: performs function after some delay
console.log("start");
const myTimeout = setTimeout(sum, 1000)
function sum(){
    console.log("mid");
}
console.log("end");

// setInterval : performs a function repeatedly after some interval
console.log("start");
setInterval(sum, 1000)
function sum(){
    console.log("mid");
}
console.log("end");

// Handling async funcs become much complex when working with callback so we use promises 