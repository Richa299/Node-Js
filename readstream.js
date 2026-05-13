//reading data chunk by chunk or byte by byte instead of reading whole file in once
const fs = require("fs");
const readStream = fs.createReadStream("./assets/Readme.md", "utf-8"); // this method will read the file from that path in text format
// reading byte by byte (text by text) or we can say all those text inside that file wil be converted to stream text by text.

readStream.on("data", (data) => {
  console.log("reading");
}); // so that we can get the text from here text by text

// "data" is an event emitted by a readable stream whenever a new chunk of data becomes available.
// "end" is an event emitted when the readable stream has no more data left to read.
