const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    console.log(req);
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));


io.on('connection', (socket) => {

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log('listening on port ' + port);
});