const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "cnf"), (readErr, files) => {
  if (readErr) {
    throw new Error("Could not read cnf");
  }

  files.forEach((file) =>
    fs.writeFile(
      `./${file}`,
      `const path=require('path');module.exports=require(path.join(__dirname,'src','cnf','${file}'))`,
      (writeErr) => {
        if (writeErr) {
          throw new Error(`Could not write ${file}`);
        }
      },
    ),
  );
});
