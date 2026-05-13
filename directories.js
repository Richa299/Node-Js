const fs = require("fs");
// renaming a directory
// fs.renameSync("./dummy-folder", "./dummy-data-folder");

// deleting the folder/directory
// fs.rmdirSync("./dummy-data-folder");
// if the folder/directory consist of some contents inside it or some file the will get error.

//This is when we have file inside the folder which we want to delete.. so will read the directory/folder and line-by-line delete the file
fs.readdirSync("./dummy-data-folder").forEach((file) => {
  fs.unlinkSync(`./dummy-data-folder/${file}`);
});

fs.rmdir("./dummy-data-folder", (err) => {
  if (err) {
    console.log(err.message);
  }
});
