//reading data chunk by chunk or byte by byte instead of reading whole file in once
const fs = require("fs");
const readStream = fs.createReadStream("./assets/Readme.md", "utf-8"); // this method will read the file from that path in text format
// reading byte by byte (text by text) or we can say all those text inside that file wil be converted to stream text by text.

let text = "";
readStream.on("data", (data) => {
  text += data;
}); // so that we can get the text from here text by text or better to say chunk by chunk

// "data" is an event emitted by a readable stream whenever a new chunk of data becomes available.
// "end" is an event emitted when the readable stream has no more data left to read.

readStream.once("data", (data) => console.log(data)); // reading the data at once

readStream.on("end", () => {
  // this event listens for when whole file reading/execution is completed
  console.log("done", text.length);
});
