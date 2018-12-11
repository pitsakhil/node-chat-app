var socket = io();

socket.on("connect", function () {
    console.log("Connected to server.");
    socket.emit('createMessage', {
        to: 'francis.ve@pitsolutions.com',
        text: 'Hai how are u?'
    })
});

socket.on("newMessage", function (res) {
    console.log("New message", res);
});

socket.on("disconnect", function () {
    console.log("Disconnected from server.");
});