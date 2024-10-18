// Built-In types:
let a: null = null;

let b: number = 123;

let c: number = 123.456;

let d: string = "Geeks";

let e: undefined = undefined;

let f: boolean = true;

let g: number = 0b111001; // Binary

let h: number = 0o436; // Octal

// use symbols to create unique props of objects 



// User-defined:
// classes, arrays, tuples, interfaces

// tuples: like an array which stores finite no. of elems of different types
let t1: [number, string, number];
t1 = [0, "dheehd", 345];

// enums: It stores constant variable which we can use anywhere in  our program .It is not mutable
enum enumenu {
  n,
  s,
  e,
  w,
}

console.log(enumenu[0]);

// Any datatype is a super datatype , if given any we can define the variable with any datatype

// string
let person: any = "989989";
console.log(typeof person);

// Readonly : cannot be reinstanstiated, its different from const as it is not for variables but for members of classes 
// readonly name :string; // compile time

interface obj{
  readonly name: string,
  age:number
}

let obj1:obj = {
  name: "aman",
  age: 9
}

// union types: can use any of the types for the same variable at a time 
let value: string | number = "Foo";
value = 10;  // Okay

// intersection types: assigns 2 or more types for the same variable at a time using &
interface Employee {
  work: () => string;
  }
interface Manager {
  manage: () => string;
  }
  
type Supervisor = Employee & Manager;
  
  // john can both work and manage
  let john: Supervisor;
  
  
