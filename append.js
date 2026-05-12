const fs = require("fs");
const text = "I am adding few more text here for the file.";
fs.appendFile("./storage-files/new-file.md", text, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Text added successfully");
  }
});
