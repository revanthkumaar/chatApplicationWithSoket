const io = require("socket.io")()


io.on("connection",() => {
    console.log('server is active');
    //event listener 
    socket.on('message', message => {
        console.log(message)
        io.emit("message",message)
    })
})

io.listen(3001);
