const EventEmitter = require("events");

class Logger extends EventEmitter {
  log = (msg) => {
    console.log(msg);
    this.emit("Log Me In", { id: "user1", password: "no idea" });
  };
}

module.exports = Logger;
