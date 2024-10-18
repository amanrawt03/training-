// Aliases in ts are used to assign custom names to data types , to make program more readable

//  type keyword is used for aliases 
type CarWheel = number
type CarModel = string 
type CarNo = number

let carWheel:CarWheel = 4
let carModel:CarModel = "Hyundai"
let carNo:CarNo = 4812300;

// for objects 
type Animal = {
    typeOfAnimal: string,
    noOfLegs: number,
    color: string
}
let dog:Animal = {
    typeOfAnimal: "mammal",
    noOfLegs: 4,
    color: "black"
}

console.log(typeof dog);