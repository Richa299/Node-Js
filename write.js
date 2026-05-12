// trying to create an empty file and write content in it.

const fs = require("fs");
const text = `hi this is my new file
`;
fs.writeFileSync("./assets/async-notes.md", text, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("file created");
  }
});
