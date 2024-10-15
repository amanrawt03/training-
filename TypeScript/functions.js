// function solve(a: number,b:number, c?:string){
//     return a+b+(c|| "c nahi dia");
// }
// let ans = solve(2,3,"De dia")
// console.log(ans);
function sum(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    var ans = a + b + c.reduce(function (prev, curr) {
        return prev + curr;
    }, 10);
    console.log(ans);
}
sum(2, 3, 1, 1, 1, 1);
// function multiply(a: number, b: number) {
//     return a * b;
//   }
//   let ans = multiply(2,3)
//   console.log(ans);
