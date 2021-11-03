const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541'// PORT number here,
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