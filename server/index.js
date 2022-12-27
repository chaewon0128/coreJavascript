

console.log(global);
const liveServer = require ('live-server');

const parmas = {
  host: 'localhost',
  port: 3000,
  open: false,
  root:'./client'
}

liveServer.start(parmas)