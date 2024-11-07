const EventEmitter = require('events')
let myEmitter = new EventEmitter()

// One event can have multiple listeners
myEmitter.on('greet', ()=>{
    console.log('hello');
})  
myEmitter.on('greet', ()=>{
    console.log('bye');
})  
myEmitter.on('solve', (num)=>{
    console.log(num);
})  
myEmitter.on('profile', (name,age)=>{
    console.log(name+' '+age);
})  

myEmitter.emit('greet')
myEmitter.emit('solve', 88)
myEmitter.emit('profile', 'Aman', 21)
