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

io.on('connection',(socket)=>{
    console.log('User Connected');

  var createdMessage

socket.on('createMessage',function(message){
    createdMessage = message;
    createdMessage.createdAt =Date.now();
    socket.emit('newMessage',createdMessage);
});

});

Server.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}.`);
});