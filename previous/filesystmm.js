const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// const afiles =
fs.readdir("$", (err, dat) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Result", dat);
  }
});

// console.log(afiles);
