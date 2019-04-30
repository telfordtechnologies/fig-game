// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080 , function(){
//   console.log('Server running on 8080...')
// })

const express = require("express");
const app = express()
const port = 8080;
let serverNumber = 0;
// const WebSocketServer = require('websocket').server;
const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(port);

app.use(express.json());

// app.listen(port , () => {
//   console.log(`${port} is our port in the storm.`)
// })

app.get("/api/getNumber" , (req, res) => {
  res.status(200).send({serverNumber: serverNumber})
})

app.use(express.static(__dirname))

setInterval(() => {
  serverNumber++
  // socket.emit("number" , {number: serverNumber})
}, 1000);

// console.log("Creating Websocket Server...");
// const wsServer = new WebSocketServer({
//   httpServer: app,
//   autoAcceptConnections: true,
// })
// console.log("WebSocket Server Created!")

// wsServer.on("request" , (request) => {
//   console.log("Hey, something happened")
// })

let playersArr = [];

io.on("connection" , function (socket) {
  socket.emit('ID ASSIGNMENT' , {number: serverNumber});
  socket.on('my other event', function (data){
    console.log(data);
  });
  socket.on("number" , function (data){
    socket.emit("number" , {number: serverNumber})
  });
  socket.on("update" , (data) => {
    if(playersArr.indexOf((player) => {
      return player.id === data.id
    }) === -1){
      playersArr.push(data)
      console.log(playersArr)
    }
    else
    {playersArr = playersArr.splice(playersArr.indexOf((player) => {
      return player.id === data.id
    }), 1 , data)
    console.log(playersArr);
  }})
});

// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);



// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection' , function(socket){
//   socket.on('chat message' , function(msg){
//     io.emit('chat message' , msg)
//   })
//   socket.on('disconnect', function(){
//     console.log('user disconnected')
//   })
// })

// http.listen(8080, function(){
//   console.log('listening on *:3000');
// });