//writing text using stream writer (byte by byte)
const fs = require("fs");
const writestream = fs.createWriteStream("./assets/stream-created-text.md");
// writestream.write("hi");
// writestream.write("richa");

// reading text chunk by chunk form one file and write chunk by chunk in another
const readStream = fs.createReadStream("./assets/Readme.md");
readStream.on("data", (data) => {
  writestream.write(data);
});
