const fs = require('fs');

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File "welcome.txt" has been created.');
  });
 
// Reading and console data from the file "welcome.txt"
fs.readFile('welcome.txt', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data from "welcome.txt":', data);
  });



