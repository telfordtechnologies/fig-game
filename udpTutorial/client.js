const PORT = 8080;
const HOST = '192.168.1.8';

const dgram = require('dgram');
const message = new Buffer("My KungFu is Good!");

const client = dgram.createSocket("udp4");
client.send(message, 0, message.length, PORT, HOST, (err , bytes) => {
  if (err) throw err;
  console.log(`UDP message sent to ${HOST} : ${PORT}`);
  client.close();
});