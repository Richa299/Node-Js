const fs = require("fs");
// renaming a directory
// fs.renameSync("./dummy-folder", "./dummy-data-folder");

// deleting the folder/directory
fs.rmdirSync("./dummy-data-folder");
// if the folder/directory consist of some contents inside it or some file the will get error.
