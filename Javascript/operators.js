// Coercion is a behaviour of js in which it automatically tries to equate the data types of variables, so a particular function can be performed     

// == equate values only, coercion occurs
console.log(undefined == null);
console.log(true == 0);

// === equate values and type, no coercion
console.log(undefined === null);
console.log(true === 0);

// (+) 1. All nums (Add)
//     2. All strings (Concat)
//     3. string, num (concat into string)
var a = 10;
var b = "jhgfd";
console.log(a + b);

// (-) 1. All nums (Subtract)
//     2. All strings (NAN)
//     3. string(with num inside), num (subtracts n returns num)
console.log(a - b);
var c = "100";
var d = a - c
console.log(typeof(d));





