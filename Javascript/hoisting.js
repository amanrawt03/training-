console.log(a);
a = 10
console.log(a);
console.log(b);
var a;
const b = 20;

// Script goes through GEC which contains 2 stages: 1. Creation 2. Execution
// First all variables declarations are stored in global scope , a as undefined and b as uninitialized
// when script is exec , it searches for a in program till now, then in global scope, there founds it as undefined .
// Can access variables before their definition: hoisting  
// hoisting can be done with var keyword and function declarations only 
// to avoid : strict mode 
