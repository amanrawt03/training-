interface vehicle{
    wheels :number,
    color: string
}
interface car extends vehicle{
    engineType: string
}

// Error:: Car interface donot have enginetype
 const pulsar:vehicle = {
    wheels :2,
    color: "red",
    // engineType :"Semi-Automatic"
 }

 const bmw:car = {
    wheels :4,
    color: "black",
    engineType :"Semi-Automatic"
 }

 
// classes access interfaces using implements , they define the values of the props in the interface

// Interfaces can never have implementations but an abstract class can .
export default car