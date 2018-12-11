const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const public_path = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
    console.log("New User connected");
    socket.on("disconnect",()=>{
        console.log("User was disconnected");
    });
});

app.use(express.static(public_path));

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})
