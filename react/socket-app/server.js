const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Localhost port
const port = 4001;

const app = express();

// Server instance
const server = http.createServer(app);

// Creates a socket using the instance of the server
const io = socketIO(server);

// This is whaat the socket.io syntax is like, we will work this later

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('change_color', (color) => {
    console.log('Color Changed to: ', color);
    io.sockets.emit('change_color', color);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => console.log(`lISTENING ON PORT ${port}`));  