var num = [1,2,3,4,5]
// for loop
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

// forEach
num.forEach((it)=>{
    console.log(it);
})  


// For objects for in is used
const obj = {
    name: "Aman",
    age: 90,
}
for(let it in obj){
    console.log(it + ": "+ obj[it]);
    
}