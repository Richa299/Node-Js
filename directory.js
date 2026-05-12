// creating a directory
const fs = require("fs");
if (fs.existsSync("storage-files")) {
  console.log("already exist");
} else {
  fs.mkdir("storage-files", (err) => {
    if (err) {
      console.log(err.message);
    }
    console.log("directory created");
  });
}
