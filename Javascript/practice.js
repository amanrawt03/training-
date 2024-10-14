// Conversions
// var a = "aman"
// var b = "90"
// var d = "3.90"
// var c1 = 3
// var c2 = 3.123
// var c = 3


// // string to num
// console.log(+a);
// console.log(+b);
// console.log(Number(b));


// console.log(parseFloat(900));
// console.log(parseInt(900/8));

// num to string
// console.log(String(c1));
// console.log(c2.toString());

//scopes
// let a = 10
// const myFunc=()=>{
//     let b = 1
    
//     while(b>=0){
//         let c = "hello"
//         console.log(c,a,b);
//         b--
//     }
//     console.log(c);
    
// }

// myFunc()
// console.log(c);
// console.log(a);

// loops
// for(let i = 0; i<4; i++){
//     console.log(i);
// }
// let arr1 = [1,2,3,4,666,77,9]
// for( i in arr1){
//     console.log(arr1[i]);
// }

// arr1.forEach(elem => {
//     console.log(elem);
    
// });

// let arr2 = arr1.map(elem=>{
//     return elem *= 2  
// })

// console.log(arr1);
// console.log(arr2);

// return all odd nums fro array
// let arr2 = arr1.filter((elem)=>{
//     return elem%2 != 0
// })
// console.log(arr2);

// (function sum(a,b){
//     console.log(a+b); 
// })(4,5)

// const hehe = (function(c,d){
//     console.log(c+d); 
// })(8,9)

// const chichi = ((a,b)=>{
//     return a*b;
// })(9,8)

// console.log(chichi);


// Asynchronous
// console.log("start");
// const myTimeout = setTimeout(sum, 1000)
// function sum(){
//     console.log("mid");
// }
// console.log("end");


// function func2(a,b,callback){
//     let sum = a+b;
//     callback(sum);
// }

// func2(2,3,(sum)=>console.log(sum));
// var  a = 10
// const newprom = new Promise((resolve, reject)=>{
//     if(a%2==0)return resolve("A is even")
//         return reject("A is not even")
// })
// newprom.then((res)=>console.log(res)).catch((err)=>console.log(err))

// async function myFunc(){
//     const res = await fetch('https://dummyjson.com/users');
//     const data = await res.json();
//     console.log(data);
// }
// myFunc()

// fetch('https://dummyjson.com/use').then(res=>res.json(), (err)=>console.log(err)
// ).then(log=>console.log(log)).catch(err=>console.log(err))


// array functions 
// var arr = [1,5,6,7,100]

// console.log(arr.findIndex(item=>{
//     return item%2==0
// }));

// var arr2 = arr; // WRONG
// var arr2 = [...arr]  //RIGHT
// var arr2 = [].concat(arr)  //RIGHT
// arr2.push(2)
// console.log(arr2);
// console.log(arr);

// console.log(Date());


if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }

console.log(x);
  