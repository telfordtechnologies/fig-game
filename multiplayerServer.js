// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8080 , function(){
//   console.log('Server running on 8080...')
// })

const express = require("express");
const app = express()
const port = 8080;
let serverNumber = 0;

app.use(express.json());

app.listen(port , () => {
  console.log(`${port} is our port in the storm.`)
})

app.get("/api/getNumber" , (req, res) => {
  res.status(200).send({serverNumber: serverNumber})
})

setInterval(() => {
  serverNumber++
}, 5000);

