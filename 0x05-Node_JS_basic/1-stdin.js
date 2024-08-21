/**
 * Module that reads from stdin and writes to stdout.
 * @returns {void}
 */

process.stdout.write("Welcome to Holberton School, what is your name?\n");

// When data is received from stdin, write it to stdout.
process.stdin.on("data", (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

// When the end of the file is reached, write a message to the console.
process.stdin.on("end", () => {
  process.stdout.write("This important software is now closing\n");
});
