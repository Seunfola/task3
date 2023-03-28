const fs = require('fs');
const [path, content] = process.argv.slice(2);

fs.writeFile(path, content, err => {
  if (err) {
    console.error(`An error occurred while writing to file: ${err}`);
  } else {
    console.log(`Content written to file: ${path}`);
  }
});
