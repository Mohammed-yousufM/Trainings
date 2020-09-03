const http = require("http");
const { Socket } = require("dgram");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
});
// server.on("connection", (socket) => console.log("new connection"));
server.listen(3000);
console.log("listening on port 3000");
