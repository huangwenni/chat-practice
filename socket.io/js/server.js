const express = require('express');
const http = require('http');
const app = express();
const server = http.Server(app);
//将socket服务器与express结合
const io = require('socket.io')(server);

io.on('connection', (client) => {
    client.on('msg', (msg) => {
        client.broadcast.emit('send', { text: msg });
        client.emit('send', { text: msg, user: 'user' });
    })
    client.on('disconnect', function () {
        console.log('客户端已断开连接');
    });
})
server.listen(8025, '0.0.0.0');