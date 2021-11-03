const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: Ali');
    // setTimeout(() => {
    //   conn.write('Move: up');
    //   conn.write('Move: left');
    // }, 21000);
    
    console.log("Connection established with game server!");
  })
  
  conn.on('data', (data) => {
    console.log('Server says:', data);
  })

  return conn;
};

module.exports = connect;