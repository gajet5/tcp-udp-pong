// // TCP
// const http = require('http');
//
// const options = {
//   host: 'localhost',
//   method: 'POST',
//   path: '/',
//   port: '3000',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': new Buffer.alloc(1000);
//   }
// };
// const request = http.request(options, (response) => {
// });
// request.end();

// UDP
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const reply = new Buffer.alloc(1000);

// client.on('message', function (message, remote) {
//   console.log('Got', message.toString());
//   client.send(reply, 0, reply.length, 6790, '0.0.0.0');
// });

client.send(reply, 0, reply.length, 6790, '0.0.0.0');
