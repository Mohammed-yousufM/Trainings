const EventEmitter = require("events");
const Logger = require("./logger");

const logger = new Logger();

logger.on("Log Me In", (arg) => {
  console.log("you're logged In");
  console.log(`User: ${arg.id} \nPassword: ${arg.password}`);
});
logger.log("I'm resting inside event, but logger is my parent");
