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

 
export default car