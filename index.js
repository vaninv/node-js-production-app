const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const WebSocketServer = require('websocket').server;

const app = express();
const port = process.env.PORT || '3000';
const server = http.createServer(app);
const wsServer = new WebSocketServer({
  httpServer: server,
});
const { eventEmitter } = require('./api/api.module.js').LikeService;
// const env = process.env.NODE_ENV || 'development';

// Middleware and settings
app.set('port', port);
app.use(bodyParser.json());

// Routes
app.use(require('./api'));

server.listen(port, () => {
  // logger.info(`Ready for connections on: ${port}`);
});

eventEmitter.on('like', (like) => {
  wsServer.broadcast(JSON.stringify(like));
});

wsServer.on('request', (request) => {
  request.accept(null, request.origin);
});
