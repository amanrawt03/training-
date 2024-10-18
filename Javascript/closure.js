// when a function has access to all the variables and functions that are defined outside that function is called closures

let a = "Aman"
function greet(){
    let b =  "Sakshi"
    console.log(`Hello ${a}`);
    console.log(`Hello ${b}`);
    console.log(`Hello ${c}`);
}
let c = "Chandan"
greet()