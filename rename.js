const fs = require("fs");
//rename file
// fs.renameSync("./assets/color.json", "./assets/color-data.json");

//moving file from one folder to desired one
// fs.rename("./assets/notes.md", "./storage-files/notes.md", (err) => {
//   if (err) {
//     console.log(err.message);
//   }
// });

// moving file to anither folder with different file name
// fs.rename("./assets/notes.md", "./storage-files/note.md", (err) => {
//   if (err) {
//     console.log(err.message);
//   }
// });

// deleting an existing file.
fs.unlinkSync("./assets/async-notes.md");
