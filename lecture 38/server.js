const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter.on("bell-rang",()=>{
//     console.log("bell rang,students should come in the class")
// })


// emitter.on("bell-rang",()=>{
//     console.log("bell rang,teachers can start the class")
// })



const informStudents=()=>{
    console.log("bell rang, students should come in the class" )
}
emitter.once("bell-rang",informStudents)

emitter.emit("bell-rang","10:00 AM");
emitter.emit("bell-rang","11:00 AM");
emitter.emit("bell-rang","12:00  AM");