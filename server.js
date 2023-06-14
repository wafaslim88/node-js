// Import the 'http' module
const http = require('http');
// Create a server using the 'createServer' method
http
  .createServer((request, response) => {
    response.end("<h1>Hello Node!!!!</h1>\n");
  })
  .listen(3000), 'localhost', () => {
    // Once the server is running, print a message to the console
    console.log('Server running at http://localhost:3000/');};
