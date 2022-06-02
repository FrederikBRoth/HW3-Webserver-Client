const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors")
const http = require("http");
app.use(cors());
//Group Chat
const SocketIo = require("socket.io")
const server = http.createServer(app);
const io = SocketIo(server, {cors: {origin: "*"}});
const port = process.env.PORT || 3000;



//Middleware

app.use(express.json());
app.use(express.text())

const nsp= io.of('/socket');
nsp.on('connection', (socket) => {
  console.log('io connected');
});
app.post("/colors", (req, res) => {
  let data = {color: {red: 0, green: 0, blue: 0}, direction: ""}
  let datastring = req.headers.tester.split(":");
  data.color.red = datastring[0]
  data.color.green = datastring[1]
  data.color.blue = datastring[2]
  data.direction = datastring[3]
  console.log(data)
  io.of("/socket").emit("colorinfo", data)
  res.end()   
})

server.listen("3001", () => console.log("Listen for socket connections"));
app.listen(port);