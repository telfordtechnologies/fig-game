// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080 , function(){
//   console.log('Server running on 8080...')
// })

const express = require("express");
const app = express()
const port = 8080;
let serverNumber = 0;
const WebSocketServer = require('websocket').server;
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(80);

app.use(express.json());

app.listen(port , () => {
  console.log(`${port} is our port in the storm.`)
})

app.get("/api/getNumber" , (req, res) => {
  res.status(200).send({serverNumber: serverNumber})
})

app.use(express.static(__dirname))

setInterval(() => {
  serverNumber++
}, 5000);

console.log("Creating Websocket Server...");
const wsServer = new WebSocketServer({
  httpServer: app,
  autoAcceptConnections: true,
})
console.log("WebSocket Server Created!")

wsServer.on("request" , (request) => {
  console.log("Hey, something happened")
})

io.on("connection" , function (socket) {
  socket.emit('news' , {hello: 'world'});
  socket.on('my other event', function (data){
    console.log(data);
  });
});