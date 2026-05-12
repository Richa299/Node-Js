const fs = require("fs");

const data = require("./assets/color.json"); // with this line node js automatocally
// read the file, do JSON parse and rteturb JSON object.
data.colorList.forEach((c) => {
  fs.appendFile("./storage-files/color.md", `${c.color}-${c.hex} \n`, (err) => {
    if (err) {
      throw err;
    }
  });
});

/*
const data = require("./assets/color.json"); 
 with this line node js automatically read the file, do JSON parse and rteturb JSON object.
 else we need to do like
 - const data=fs.readFileSync("./assets/color.json");
   JSON.parse(data)
 */
