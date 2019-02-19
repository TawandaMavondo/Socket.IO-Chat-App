const path = require('path')
const express = require('express');
const publicPath = path.join(__dirname,'../public');
const SocketIO = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 3000
var app = express();
app.use(express.static(publicPath));
var Server = http.createServer(app);
var io = SocketIO(Server);

io.on('connection',()=>{
    console.log('User Connected');
});

Server.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}.`);
});