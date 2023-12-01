const OPTIONS = require('./options');

if (OPTIONS.TCP_USE) {
  const http = require('http');

  let postData = '';
  for (let i = 0; i < OPTIONS.TCP_BUFFER_SIZE; i += 1) {
    postData = postData + 'a';
  }

  const requestOptions = {
    host: OPTIONS.SERVER_IP,
    method: 'POST',
    path: '/',
    port: OPTIONS.TCP_PORT,
    headers: {
      'Content-Type': 'text/html',
      'Content-Length': postData,
    }
  };

  for (let i = 0; i < OPTIONS.TCP_REQUEST_TIMES; i++) {
    const request = http.request(requestOptions);
    request.end();
  }

  console.log(`Было отослано ${OPTIONS.TCP_REQUEST_TIMES} TCP пакетов, размером ${OPTIONS.TCP_BUFFER_SIZE}`);
}

if (OPTIONS.UDP_USE) {
  const dgram = require('dgram');

  const reply = new Buffer.alloc(OPTIONS.UDP_BUFFER_SIZE);
  const client = dgram.createSocket('udp4');

  for (let i = 0; i < OPTIONS.UDP_REQUEST_TIMES; i++) {
    client.send(reply, 0, reply.length, OPTIONS.UDP_PORT, OPTIONS.SERVER_IP);
  }

  setTimeout(() => {
    client.close();
  }, 1000);

  console.log(`Было отослано ${OPTIONS.UDP_REQUEST_TIMES} UDP пакетов, размером ${OPTIONS.UDP_BUFFER_SIZE}`);
}
