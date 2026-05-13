//writing text using stream writer (byte by byte)
const fs = require("fs");
const writestream = fs.createWriteStream("./assets/stream-created-text.md");
writestream.write("hi");
writestream.write("richa");
