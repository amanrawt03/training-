// In js we create functions in several ways:
// 1. function Declarations
function greet(){
    console.log("Hello");
}
greet()

// 2. Function expression
const greet2 = function(){
    console.log("hello again");
}
greet2()

// 3. Arrow FUnctions: For shorter syntax
const greet3 =()=>{
    console.log("Hello hello hello");
}
greet3();

// ** ONLY FUNCTION DECLARATIONS CAN BE HOISTED.
// ** THIS KEYWORD CAN ONLY BE USED WITH FUNCTION DECLARATIONS

// IIFE
(function() {
    console.log("Bye");
    
})();