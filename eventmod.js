const EventEmitter = require("events");
const logger = require("./logger");

const Emitter = new EventEmitter();

Emitter.on("am the signal", (arg) => {
  console.log("Happy responding time");
  logger.log(arg.name);
});
Emitter.emit("am the signal", { id: 1, url: "https://", name: "sumama" });
