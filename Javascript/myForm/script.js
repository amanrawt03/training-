const name = const email = 
const number = )


// let handleNameVal=()=>{
//     nameVal = name.value
// }
// let handleEmailVal=()=>{
//     emailVal = email.value
// }
// let handleNumberVal=()=>{
//     numVal = number.value
// }

const btn = document.querySelector("button")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    let body = document.body

    let para = document.createElement("p")

    body.append(para)
    let nameVal = document.getElementById("name").value
    let emailVal = document.getElementById("email").value
    let numVal = document.getElementById("number").value
    let content = document.createTextNode(`${nameVal}--${emailVal}--${numVal}`)

    para.appendChild(content)


    console.log(body.innerHTML);
})
