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

socket.on('createMessage',function(message){
    io.emit('newMessage',{
        from:message.from,
        text:message.text,
        completedAt:Date.now()
    });

});
});
Server.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}.`);
});