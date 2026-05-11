const fs = require("fs");
// const text = fs.readFileSync("./assets/Readme.md", "utf-8"); //synchronous way of reading file data
// console.log(text);

// asynchronous
fs.readFile("./assets/Readme.md", "utf-8", (err, text) => {
  if (err) {
    throw err;
  } else {
    console.log(text);
  }
});

//reading an image

fs.readFile("./assets/headphones.pnng", (err, img) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(img);
  }
});
/*
points to remember:-
by default any file which read by readFile method is in binary format.
*/
