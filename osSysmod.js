const os = require("os");

var totalmem = os.totalmem();
var freemem = os.freemem();

console.log(totalmem, freemem);
