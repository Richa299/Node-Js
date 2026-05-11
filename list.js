//synchronous / blocking
// const fs = require("fs");
// console.log("started");
// const files = fs.readdirSync("./assets");
// console.log("ended");
// console.log(files);
// fs is a predefined node module responsible for interacting with your current system's file system.

// asynchronous
const fs = require("fs");
fs.readdir("./assets", (err, file) => {
  if (err) {
    throw err;
  } else {
    console.log(file);
    // return file;
  }
});
console.log("started");
