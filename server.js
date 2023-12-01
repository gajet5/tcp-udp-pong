const OPTIONS = require('./options');

if (OPTIONS.TCP_USE) {
  const http = require('http');

  const serverTCP = http.createServer();

  serverTCP.on('connection', function () {
    console.log(`TCP получено`);
  })

  serverTCP.listen(OPTIONS.TCP_PORT, function () {
    console.log(`Server TCP on: http://${OPTIONS.SERVER_IP}:${OPTIONS.TCP_PORT}`);
  });
}

if (OPTIONS.UDP_USE) {
  const dgram = require('dgram');
  const serverUPD = dgram.createSocket('udp4');

  serverUPD.on('message',  function () {
    console.log('UDP получено');
  });

  serverUPD.on('listening', () => {
    console.log(`Server UDP on: http://${OPTIONS.SERVER_IP}:${OPTIONS.UDP_PORT}`);
  })

  serverUPD.bind(OPTIONS.UDP_PORT, OPTIONS.SERVER_IP);
}
