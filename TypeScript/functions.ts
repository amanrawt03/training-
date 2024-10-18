
// function solve(a: number,b:number, c?:string){
//     return a+b+(c|| "c nahi dia");
// }
// let ans = solve(2,3,"De dia")
// console.log(ans);

function sum(a: number,b:number, ...c:number[]){
    let ans = a+b+c.reduce((prev,curr)=>{
        return prev+curr
    }, 10)
    console.log(ans);
    
    
    
}
sum(2,3,1,1,1,1)

// function multiply(a: number, b: number) {
//     return a * b;
//   }


//   let ans = multiply(2,3)
//   console.log(ans);
  

