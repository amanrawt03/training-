// Built-In types:
let a: null = null;

let b: number = 123;

let c: number = 123.456;

let d: string = "Geeks";

let e: undefined = undefined;

let f: boolean = true;

let g: number = 0b111001; // Binary

let h: number = 0o436; // Octal

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
