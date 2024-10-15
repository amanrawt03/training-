interface Car{
    wheels :number,
    modelName: string
}
interface TeslaCar extends Car{
    engineType: string
}

// Error:: Car interface donot have enginetype
//  const car:Car = {
//     // wheels :4,
//     // modelName: "nano",
    // engineType :"Semi-Automatic"

//  }

 const car:TeslaCar = {
    wheels :4,
    modelName: "nano",
    engineType :"Semi-Automatic"
 }
 console.log(car);
 
//  console.log(car.numPlate);
//  console.log(typeof(car));
 