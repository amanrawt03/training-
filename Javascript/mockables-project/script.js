async function handleCars(){
    const res = await fetch("http://demo1637658.mockable.io/getMyCars")
    const data = await res.json()
    console.log(data);  
    document.getElementById("carBtn").style.backgroundColor ="red" 

    let cars = document.querySelector(".cars");
    let list = document.createElement('ul')
    cars.appendChild(list)
    let items = data.map((elem)=>{
        let li = document.createElement("li")
        let content = document.createTextNode(`${elem.modelName} (${elem.modelYear}) - ${elem.car_no} - ${elem.price}`)
        li.appendChild(content)
        return li
    })
    console.log(typeof(items));

    // Append each item to the list
    items.forEach((item) => {
        list.appendChild(item);
    });
}



async function handlePosts(){
    const res = await fetch("https://demo1637658.mockable.io/getAllPosts")
    const data = await res.json()
    document.getElementById("postBtn").style.backgroundColor ="red"
    let posts = document.querySelector(".posts");
    let list = document.createElement("ul")
    posts.appendChild(list)
    const items  = data.map(elem=>{
        let li = document.createElement("li")
        let content = document.createTextNode(`${elem.post}- ${elem.likes}`);
        li.appendChild(content)
        return li;
    })
    items.forEach(item=>{
        list.appendChild(item);
    })
}

function handleUsers(){
    var data = [];
    fetch("https://demo1637658.mockable.io/getAllUsers").then(res=>res.json()).then(res=>{
        data = [...res]
        console.log(data);
        document.getElementById("userBtn").style.backgroundColor ="red"
        let users = document.querySelector(".users")
        let list = document.createElement("ul")
        users.appendChild(list)
        let items = data.map(elem=>{
            let li = document.createElement("li")
            let content = document.createTextNode(`name: ${elem.name} - age: ${elem.age}`)
            li.appendChild(content)
            return li
        })
    
        items.forEach(item=>{
            list.appendChild(item)
        })
    })
   
}