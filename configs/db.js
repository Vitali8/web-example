const mysql = require('mysql');
const db_config = {
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'example-db'
};

module.exports = app => {
  let connection;

  function initConnection() {
    // Recreate the connection, since
    // the old one cannot be reused.
    connection = mysql.createConnection(db_config); 

    connection.connect(function (err) {              // The server is either down
      if (err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(initConnection, 2000); // We introduce a delay before attempting to reconnect,
      }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.

    connection.on('error', function (err) {
      // console.log('db error', err);
      if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        console.log("DB", err.message, "Reconnecting...");
        initConnection();                           // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
    app.set('db', connection);
  }

  initConnection();
};
