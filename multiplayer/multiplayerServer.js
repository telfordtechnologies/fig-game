const express = require("express");
const app = express(); // To create the initial server object
const server = require("http").createServer(app); // Creating a socket-friendly server using Node's built-in http methodology
const io = require("socket.io")(server); // Requiring a function that returns the io object.

const port = 8080;
server.listen(port);

app.use(express.json());
app.use(express.static(__dirname));


let serverNumber = 0; // Just my lazy way of generating id's
setInterval(() => {
  serverNumber++
}, 1000);

let playersArr = []; // Players are pushed to this array upon connecting.

io.on("connection" , function (socket) { 
  socket.emit('ID ASSIGNMENT' , {number: serverNumber});  
  // (ABOVE) A method (emit) with an identifier(a password of sorts) and some data. This is outbound.
  // (BELOW) A method (on) with an identifier and a request handler.
  socket.on("update" , (data) => {
    playersArr = [...playersArr.filter(p => p.id !== data.id) , data]
    socket.emit("update" , playersArr);
  })
});

// tl;dr: io has methods. ".on" is the inbound handler. ".emit" is the outbound handler. ".on" takes an identifier string and a handler function; ".emit" takes an identifier string and a data packet object or array.



