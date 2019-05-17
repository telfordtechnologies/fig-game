const express = require("express");
const app = express()
const port = 8080;
let serverNumber = 0;
const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(port);

app.use(express.json());


app.get("/api/getNumber" , (req, res) => {
  res.status(200).send({serverNumber: serverNumber})
})

app.use(express.static(__dirname))

setInterval(() => {
  serverNumber++
  console.log(serverNumber)
}, 1000);

let playersArr = [];

io.on("connection" , function (socket) {
  socket.emit('ID ASSIGNMENT' , {number: serverNumber});
  socket.on('my other event', function (data){
    console.log(data);
  });
  socket.on("update" , (data) => {
    playersArr = [...playersArr.filter(p => p.id !== data.id) , data]
    socket.emit("update" , playersArr);
  })
});



