// // TCP
// const http = require('http');
//
// const PORT = 3000;
//
// function handleRequest(request, response) {
//   console.log(request.headers);
//   response.end('It Works!! Path Hit: ' + request.url);
// }
//
// const serverTCP = http.createServer(handleRequest);
// serverTCP.listen(PORT, function () {
//   console.log("Server listening on: http://localhost:%s", PORT);
// });

// UDP
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const reply = new Buffer.from('pong');

server.on('message', function (message, remote) {
  console.log('Got', message.toString());
  server.send(reply, 0, reply.length, remote.port, remote.address);
});

server.bind(6790, '0.0.0.0');