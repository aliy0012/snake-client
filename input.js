const connect = require("./client");
// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  stdin.resume();
  return stdin;
};



const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  } else if(data === 'w') {
    connection.write("Move: up");
  } else if(data === 'a') {
    connection.write("Move: left");
  } else if(data === 's') {
    connection.write("Move: down");
  } else if(data === 'd') {
    connection.write("Move: right");
  } 

};
setupInput();

module.exports = setupInput;
