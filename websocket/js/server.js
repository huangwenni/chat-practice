const WebSocket = require('ws');
const ws = new WebSocket.Server({ port: 8050 }, () => {
    console.log('服务器已启动');
})
let clients = [];
ws.on('connection', (client) => {
    clients.push(client);
    client.on('message', (msg) => {
        for (let index in clients) {
            clients[index].send(msg)
        }
    })
    client.on('close', () => {
        console.log('前端主动断开了连接');
    })
})































