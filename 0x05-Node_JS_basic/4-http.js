/**
 * A simple HTTP server that responds with a static message.
 * @author Tomilola Oluwafemi <https://github.com/Tomilola-ng>
 */

const http = require("http");

const PORT = 1245;
const HOST = "localhost";
const app = http.createServer();

// Respond to all requests with a static message
app.on("request", (_, res) => {
  const responseText = "Hello Holberton School!";

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Length", responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

// Start the server
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the server instance
module.exports = app;
