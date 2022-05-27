const app = require("express")()

const http = require("http").Server(app)

const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {
    console.log("Connected to socket: ", socket.id)
    socket.on("message", (message) => {
        console.log("Message received: ", message)
        socket.emit('message', `${socket.id.substr(0, 2)} said ${message}`)
    })
})

http.listen(8080, () => {
    console.log("Listening to port 8080...")
})